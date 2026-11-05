(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.ttsPlay2 = factory();
	}
})(this, function () {
	'use strict';
	class ttsPlay2 {
        constructor(option){
            this.option = $.extend({
                element:"",
            }, option);
            console.log(this.option)
            this.element = $(this.option.element)
            if(this.element.length==0){
                return
            }
            let ele = this.element.closest("[class^='e_']")
            this.eid = ele.attr("class").split(/\s+/)[0]
            let comp = this.element.closest("[id^='c_']")
            this.cid = comp.attr("id")
            this.textList = []
            this.audioList = []
            this.cText = []
            this.player = null
            this.nowId = ""
            this.ttsAudio = null
            this.token = ""
            this.env = this.getBrowserEnv()
            if(this.env.isAndroidWeixin){
                window.sourcePlayer = {}
                $require(['/npublic/commonjs/nouglify/audioPlay/webPlayer.js','pl_util'],()=>{
                    this.sourcePlayer = new webPlayer({
                        cid:this.cid,
                        eid:this.eid,
                        element:this.option.element,
                    });
                    window.sourcePlayer[`${this.cid}_${this.eid}`] = this.sourcePlayer;
                    this.init()
                })
            }else{
                $require(['css!/npublic/commonjs/nouglify/plyr/plyr.css','nouglify/plyr/plyr.js','pl_util'],()=>{
                    this.init()
                })
            }
        }
        getBrowserEnv() {
            const ua = navigator.userAgent.toLowerCase();
            return {
                isWeixin: /micromessenger/.test(ua),
                isAndroid: /android/.test(ua),
                isIOS: /(iphone|ipad|ipod|ios)/.test(ua),
                isX5: /tbs/.test(ua) || /mqqbrowser/.test(ua),
                isAndroidWeixin: /micromessenger/.test(ua) && /android/.test(ua)
            };
        }
        //初始化遍历所有p和div，添加播放按钮
        init(){
            if(this.option.aid && this.option.tid && this.option.cid && this.option.code){
                this.getAudioUrl(()=>{
                    if(this.audioList.length>0){
                        let ttsReadBtn = this.element.find(".ttsRead")
                        if(ttsReadBtn.length>0){
                            ttsReadBtn.attr("id",`readBtn_${this.cid}_${this.eid}`)
                        }else{
                            this.element.prepend(`<a href="javascript:;" class="ttsRead" id="readBtn_${this.cid}_${this.eid}"><svg t="1710380018673" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="https://www.w3.org/2000/svg" p-id="10306" width="200" height="200"><path d="M527.616 121.7024L289.9456 274.3296H171.3664a118.784 118.784 0 0 0-119.296 118.8352v238.08a118.5792 118.5792 0 0 0 119.296 118.784h118.5792l237.6704 152.5248c33.5872 14.592 59.5968-1.024 59.5968-34.048V155.7504c0-32.8704-26.6752-48.2304-59.5968-34.048z m200.2432 191.8464a29.7472 29.7472 0 1 0-43.4176 40.6016 173.1584 173.1584 0 0 1 24.7296 38.912 267.0592 267.0592 0 0 1 26.7264 118.9376 266.8032 266.8032 0 0 1-26.7264 119.0912 174.08 174.08 0 0 1-24.7296 38.9632 29.7472 29.7472 0 1 0 43.4688 40.6016 225.28 225.28 0 0 0 34.6624-53.3504 326.3488 326.3488 0 0 0 32.768-145.408 326.2976 326.2976 0 0 0-32.768-145.3568 226.9184 226.9184 0 0 0-34.7136-53.1968z m182.3232-36.8128c-24.0128-40.704-48.2816-68.864-65.3824-84.0192a29.7472 29.7472 0 0 0-39.5776 44.3904 192.1536 192.1536 0 0 1 15.872 16.7936 363.0592 363.0592 0 0 1 37.888 53.2992 398.6944 398.6944 0 0 1 55.296 204.8 398.6944 398.6944 0 0 1-55.3472 205.312 372.736 372.736 0 0 1-37.7856 53.0432 196.9152 196.9152 0 0 1-15.872 16.7424 29.7472 29.7472 0 0 0 39.5264 44.4416c17.0496-15.36 41.2672-43.3152 65.3312-84.0192a458.24 458.24 0 0 0 63.5392-235.52 456.9088 456.9088 0 0 0-63.488-235.52z" p-id="10307"></path></svg><span></span></a>`)
                        }  
                        this.element.find(".ttsRead").show() 
                        this.renderAudioClick()
                        this.renderCss()
                    }else{
                        this.element.find(".ttsRead").remove()
                    }
                })
            }
        }
        renderCss(){
            if($('#audioCss').length>0){
                return
            }
            let css = `.ttsRead{color:#105850}`
            let style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'audioCss'
            style.innerHTML = css;
            document.getElementsByTagName('head')[0].appendChild(style);
        }
        // 请求后端Url
        getAudioUrl(callback){
            $require(['cmsAjax'],(c)=>{
                let url = "/fwebapi/visitor/lowcode/audio/getContentAudios"
                let p = {
                    appCode:this.option.aid,
                    sourceCode:this.option.tid,
                    contentId:this.option.cid,
                    code:this.option.code
                }
                c.cmsAjax.get(url,p).then((res)=>{
                    console.log(res)
                    try{
                        this.audioList = res.data[this.option.code].list
                        this.audioList = this.audioList.map(e=>{
                            return e=$.handleDataFile(e)
                        })
                        callback()
                    }catch(e){
                        callback()
                    }
                })
            })
        }
        renderAudioClick(){
            this.element.on("click",".ttsRead",(e)=>{
                let btn = $(e.currentTarget)
                let id = btn.attr("id")
                if(id == this.nowId){
                    if(btn.hasClass('isPaused')){
                        if(this.env.isAndroidWeixin){
                            this.sourcePlayer.play()
                        }else{
                            this.audioPlay()
                        }
                        btn.removeClass('isPaused')
                    }else{
                        if(this.env.isAndroidWeixin){
                            this.sourcePlayer.pause()
                        }else{
                            this.audioStop()
                        }
                        btn.addClass('isPaused')
                    }
                    return
                }
                this.playList = JSON.parse(JSON.stringify(this.audioList))
                this.nowId = id
                this.element.find(".plyr").remove()
                this.element.find(".ttsAudio").remove()
                this.element.find(".ttsRead").removeClass('isPaused')
                if(this.env.isAndroidWeixin){
                    this.sourcePlayer.stop();
                    this.sourcePlayer.setPlaylist(this.playList);
                    this.sourcePlayer.onTrackEnd = (trackUrl) => {
                        // console.log(`已完成播放: ${trackUrl}`);
                    };
                    this.sourcePlayer.onPlaylistEnd = () => {
                        console.log('播放列表全部播放完毕');
                        this.nowId = ""
                    };
                    this.sourcePlayer.startPlaylist();
                    return
                }else{
                    this.processAudioQueue(true)
                }
            })
        }
        // 队列渲染
        processAudioQueue(k){
            if(this.playList.length==0){
                this.playFirst(()=>{
                    console.log('队列完成')
                    this.nowId = ""
                })
                return
            }
            let item = this.playList.shift()
            let item2 = null
            if(k){
                item2 = this.playList.shift()
            }
            this.readAudio(item,item2).then(()=>{
                this.processAudioQueue()
            })
        }
        // 异步插入音频，并控制播放
        readAudio(url1,url2){
            return new Promise((resolve, reject) => {
                this.appendAudio(url1)
                if(url2){
                    this.appendAudio(url2)
                }
                setTimeout(()=>{
                    this.playFirst(resolve)
                },500)
            });
        }
        playFirst(resolve){
            this.ttsAudio = this.element.find('.ttsAudio')[0];
            if (this.ttsAudio) {
                let id = this.ttsAudio.id
                this.audioPlay()
                this.ttsAudio.addEventListener('ended',()=>{
                    $(this.ttsAudio).parent(".plyr").remove();
                    $(this.ttsAudio).remove();
                    if(resolve){
                        resolve()
                    }
                });
                const player = new Plyr('#'+ id, {});
                // $("#"+ id).parent(".plyr").show()
            }else{
                if(resolve){
                    resolve()
                }
            }
        }
        // 插入音频
        appendAudio(url){
            url = $.handleDataFile(url)
            let id = 'ttsAudio'+ +new Date();
            const audio = document.createElement('audio');
            audio.className = 'ttsAudio';
            audio.id = id;
            audio.preload = 'auto';
            audio.src = url; 
            this.element.append(audio)
        }
        // 播放音频
        audioPlay(){
            if(this.ttsAudio){
                this.stopOther()
                this.ttsAudio.play();
            }
        }
        // 暂停音频
        audioStop(){
            if(this.ttsAudio){
                this.ttsAudio.pause()
            }
        }
        stopOther(){
            let otherAudio = $('.ttsAudio').not(this.ttsAudio)
            otherAudio.each((i,item)=>{
                item.pause()
                $(item).parents("[ttsplay]").find(".ttsRead").addClass("isPaused")
            })
        }
        stopOtherSourcePlayer(){
            for (let key in window.sourcePlayer) {
                if (key != `${this.cid}_${this.eid}`) {
                    window.sourcePlayer[key].pause();
                }
            }
        }
    }
  	return ttsPlay2;
});