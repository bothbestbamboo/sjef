$require(['swiper'], function () {
    var honoRBox = new Swiper('.honoRBox', {
        autoplay: {
            delay: 2500, // 2.5秒切换一次
        },
        // loop: true, // 循环(loop)模式，使用的话取消注释
        observer:true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents:true, //修改swiper的父元素时，自动初始化swiper
        slidesPerView: 1,
        spaceBetween: 20,
        watchSlidesVisibility: true,
        centerInsufficientSlides: true,
        navigation: {
            nextEl: '.honoRBoxBB .swiper-button-next',
            prevEl: '.honoRBoxBB .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 6,
                spaceBetween: 25
            }
        }
    })
})