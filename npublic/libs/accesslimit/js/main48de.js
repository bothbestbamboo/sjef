$(function(){
    const input=$('#code')[0], field=$('#field')[0];
    $("body").on("click",".enterBtn",function(){
        let txt = $(".keyInput input").val().trim()
        if(!txt){
            toast('warn','请输入网站访问限制编码', `Please enter the site access restriction code`, 5000);
            field.classList.remove('shake'); void field.offsetWidth; field.classList.add('shake');
            input.focus();
            return
        }
        let url = `/nportal/fwebapi/visitor/lowcode/designToken/checkAuthCode`
        $.ajax({
            url: url,
            type: "get",
            data: {
                authCode: txt,
                instance: tenant.bossProductInstance
            },
            success: function (res) {
                if(res.data && res.data.allow){
                    localStorage.setItem("kt"+tenant.tenantId,+new Date())
                    location.href="../../../index.html"
                }else if(res.data && res.data.errorCode=="1001"){
                    toast('err',"抱歉，您填写的网站授权码已过期，无法访问。", `Sorry, the website authorization code you entered has expired and access is unavailable.`, 5000);
                    field.classList.remove('shake'); void field.offsetWidth; field.classList.add('shake');
                    input.focus();
                }else{
                    toast('err',"网站访问限制编码错误", `Website access restriction encoding error`, 5000);
                    field.classList.remove('shake'); void field.offsetWidth; field.classList.add('shake');
                    input.focus();
                }
            }
        })
    })

    $('#eye').on('click', ()=>{
        input.type = input.type === 'password' ? 'text' : 'password';
        input.focus();
    });

    /* ---------- Toast ---------- */
    function toast(kind, title, detail, ms){
        const ICONS = {
            ok:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="12" cy="12" r="10" opacity=".25"/><path d="M8 12.5l2.6 2.6L16 9.5"/></svg>',
            warn:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 3l9.5 17H2.5z" opacity=".25"/><path d="M12 9v5"/><circle cx="12" cy="17" r=".6" fill="currentColor"/></svg>',
            err:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="12" cy="12" r="10" opacity=".25"/><path d="M9 9l6 6M15 9l-6 6"/></svg>'
        };
        ms = ms || 3600;
        const el = document.createElement('div');
        el.className = 'toast ' + kind;
        el.style.position = 'relative';
        el.innerHTML = `<span class="ic">${ICONS[kind]}</span><span class="tx"><span class="t1">${title}</span>${detail?`<span class="t2">${detail}</span>`:''}</span><span class="bar" style="width:100%;transition:width ${ms}ms linear"></span>`;
        const box = $('#toasts')[0];
        box.appendChild(el);
        requestAnimationFrame(()=>{ el.classList.add('show'); const b=el.querySelector('.bar'); requestAnimationFrame(()=>b.style.width='0%'); });
        const kill = ()=>{ el.classList.remove('show'); setTimeout(()=>el.remove(), 240); };
        const t = setTimeout(kill, ms);
        el.onclick = ()=>{ clearTimeout(t); kill(); };
        while(box.children.length > 3) box.firstChild.remove();
    }

})