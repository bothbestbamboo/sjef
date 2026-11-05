(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.ttsPlay = factory();
	}
})(this, function () {
	'use strict';
	class ttsPlay {
        constructor(option){
            this.option = $.extend({
                element:"",
            }, option);
            this.element = $(this.option.element)
            if(this.element.length==0){
                return
            }
            this.textList = []
            this.cText = []
            this.player = null
            this.nowId = ""
            this.ttsAudio = null
            this.token = ""
            this.env = this.getBrowserEnv()
            if(this.env.isAndroidWeixin){
                $require(['/npublic/commonjs/nouglify/audioPlay/webPlayer.js'],()=>{
                    this.sourcePlayer = new webPlayer();
                    this.init()
                })
            }else{
                $require(['css!/npublic/commonjs/nouglify/plyr/plyr.css','/npublic/commonjs/nouglify/plyr/plyr.js'],()=>{
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
            this.element.children('*').each((i,e)=>{
                let text = e.innerText.trim()
                let tItm = $(e)
                if(text){
                    this.textList.push({
                        id:'readBtn'+i,
                        text:text,
                    })
                    tItm.prepend(`<a href="javascript:;" class="ttsRead" id="readBtn${i}"><svg t="1710380018673" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="https://www.w3.org/2000/svg" p-id="10306" width="200" height="200"><path d="M527.616 121.7024L289.9456 274.3296H171.3664a118.784 118.784 0 0 0-119.296 118.8352v238.08a118.5792 118.5792 0 0 0 119.296 118.784h118.5792l237.6704 152.5248c33.5872 14.592 59.5968-1.024 59.5968-34.048V155.7504c0-32.8704-26.6752-48.2304-59.5968-34.048z m200.2432 191.8464a29.7472 29.7472 0 1 0-43.4176 40.6016 173.1584 173.1584 0 0 1 24.7296 38.912 267.0592 267.0592 0 0 1 26.7264 118.9376 266.8032 266.8032 0 0 1-26.7264 119.0912 174.08 174.08 0 0 1-24.7296 38.9632 29.7472 29.7472 0 1 0 43.4688 40.6016 225.28 225.28 0 0 0 34.6624-53.3504 326.3488 326.3488 0 0 0 32.768-145.408 326.2976 326.2976 0 0 0-32.768-145.3568 226.9184 226.9184 0 0 0-34.7136-53.1968z m182.3232-36.8128c-24.0128-40.704-48.2816-68.864-65.3824-84.0192a29.7472 29.7472 0 0 0-39.5776 44.3904 192.1536 192.1536 0 0 1 15.872 16.7936 363.0592 363.0592 0 0 1 37.888 53.2992 398.6944 398.6944 0 0 1 55.296 204.8 398.6944 398.6944 0 0 1-55.3472 205.312 372.736 372.736 0 0 1-37.7856 53.0432 196.9152 196.9152 0 0 1-15.872 16.7424 29.7472 29.7472 0 0 0 39.5264 44.4416c17.0496-15.36 41.2672-43.3152 65.3312-84.0192a458.24 458.24 0 0 0 63.5392-235.52 456.9088 456.9088 0 0 0-63.488-235.52z" p-id="10307"></path></svg><span></span></a>`)
                }
            })
            console.log(this.textList)
            this.renderClick()
        }
        // 注册播放按钮点击事件
        renderClick(){
            this.element.on("click",".ttsRead",(e)=>{
                let btn = $(e.currentTarget)
                let id = btn.attr("id")
                let text = this.textList.find(n=>n.id==id).text
                if(text){
                    if(id == this.nowId){
                        if(btn.hasClass('isPaused')){
                            this.audioPlay()
                            btn.removeClass('isPaused')
                        }else{
                            this.audioStop()
                            btn.addClass('isPaused')
                        }
                        return
                    }
                    this.nowId = id
                    this.element.find(".plyr").remove()
                    this.element.find(".ttsAudio").remove()
                    this.element.find(".ttsRead").removeClass('isPaused')
                    $require(['cmsAjax',"jsencrypt.js","/npublic/commonjs/nouglify/jquery.md5.js"],(c,rsa,a)=>{
                        let url = "/fwebapi/visitor/lowcode/audio/getAudioToken"
                        let p = $.nrsa(`designVue&${$.md5(navigator.userAgent)}`,'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCdBbSMUKBY3wW8C/RFFwFoTHyO8xM67xBtgERb/4z6dqUq2ZeTagHUT6tbnuvhug0FNU9t/bzBc6KOivkzPToYYJG/RDzvdAJTjdvvvu3WQUpKOa0s0V3ehkKRoZPIFw3YnahtUrIe9es0V0LlTkOyFlH2M6rpceC7K0XgEs7lZwIDAQAB')
                        c.cmsAjax.get(url,{},{headers:{authCode:p}}).then((res)=>{
                            if(res && res.data && res.data.token){
                                this.token = res.data.token
                                this.renderText(text)
                            }
                        })
                    })
                }
            })
        }
        // 解析文本，分隔成数组
        renderText(text){
            let tArr = []
            if(text.length>60){
                tArr = text.split(/[。:；\n]/)
            }else{
                tArr.push(text)
            }
            tArr = tArr.filter(item => item.trim()!== '').map(item => item.trim());
            this.cText = tArr
            console.log(this.cText)
            this.cText.forEach(e=>{
                console.log(e.length,e)
            })
            if(this.env.isAndroidWeixin){
                let audioList = []
                this.cText.forEach(e=>{
                    let url = this.getAudio(e)
                    audioList.push(url)
                })
                this.sourcePlayer.stop();
                this.sourcePlayer.setPlaylist(audioList);
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
                this.processQueue(true)
            }
        }
        // 队列渲染
        processQueue(k){
            if(this.cText.length==0){
                console.log('队列完成')
                this.playFirst()
                this.nowId = ""
                return
            }
            let item = this.cText.shift()
            let item2 = null
            if(k){
                item2 = this.cText.shift()
            }
            this.read(item,item2).then(()=>{
                this.processQueue()
            })
        }
        // 异步插入音频，并控制播放
        read(text,text2){
            return new Promise((resolve, reject) => {
                this.appendAudio(text)
                if(text2){
                    this.appendAudio(text2)
                }
                this.playFirst(resolve)
            });
        }
        playFirst(resolve){
            this.ttsAudio = this.element.find('.ttsAudio')[0];
            if (this.ttsAudio) {
                let id = this.ttsAudio.id
                this.ttsAudio.play();
                this.ttsAudio.addEventListener('ended',()=>{
                    $(this.ttsAudio).parent(".plyr").remove();
                    $(this.ttsAudio).remove();
                    if(resolve){
                        resolve()
                    }
                });
                $("#"+ id).parent(".plyr").show()
            }
        }
        // 插入音频
        appendAudio(text){
            let url = this.getAudio(text)
            const audio = document.createElement('audio');
            // audio.src = url; 
            audio.className = 'ttsAudio';
            let id = 'ttsAudio'+ +new Date();
            audio.id = id;
            audio.preload = 'auto';
            this.element.append(audio)
            const player = new Plyr('#'+ id, {});
            $("#"+ id).parent(".plyr").hide()
            audio.src = url; 
        }
        // 获取音频地址
        getAudio(text){
            let data = {
                token:this.token,
                tex:encodeURIComponent(encodeURIComponent(text)),
                lan:'zh',
                cuid:'ypsm',
                ctp:1,
                spd:8
            }
            let arr = []
            for(let i in data){
                arr.push(`${i}=${data[i]}`)
            }
            let url = `/fwebapi/visitor/lowcode/audio/getAudioData?${arr.join('&')}`
            return url
        }
        // 播放音频
        audioPlay(url){
            this.ttsAudio.play();
        }
        // 暂停音频
        audioStop(){
            this.ttsAudio.pause()
        }
    }
  	return ttsPlay;
});