
    $(".side6").on("click", function () {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 500);
    });
    $(".wyz-top").on("click", function () {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 500);
    });



    //top fixed
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('#c_navigation_006_P_298-1658215722332').addClass('active')
        } else {
            $('#c_navigation_006_P_298-1658215722332').removeClass('active')
        }
    })

    $('#c_navigation_006_P_298-1658215722332').mouseenter(function () {
        $('#c_navigation_006_P_298-1658215722332').addClass('active')
    }).mouseleave(function () {
        if ($(window).scrollTop() == 0) {
            $('#c_navigation_006_P_298-1658215722332').removeClass('active')
        }
    });

    //top nav
    $(function () {
        var wind_w = $(window).width();
        var ab_sum = $('.e_container-22 .nav_sum .ab_sum').html();
        var new_sum = $('.e_container-22 .nav_sum .new_sum').html();
        var ser_sum = $('.e_container-22 .nav_sum .ser_sum').html();
        var con_sum = $('.e_container-22 .nav_sum .con_sum').html();
        $('.e_navigationF-24 .p_navItem1:nth-child(2) .dropdown .left .jieshao').append(ab_sum);
        $('.e_navigationF-24 .p_navItem1:nth-child(3) .dropdown .left .jieshao').append(new_sum);
        $('.e_navigationF-24 .p_navItem1:nth-child(4) .dropdown .left .jieshao').append(ser_sum);
        $('.e_navigationF-24 .p_navItem1:nth-child(5) .dropdown .left .jieshao').append(con_sum);
        $('.e_navigationF-24 .p_navItem1:nth-child(6) .dropdown .left .jieshao').append(con_sum);
        $('.e_navigationF-24 .p_navItem1 .sj_warp').find('.p_level3Box').parents('.p_navItem1').addClass('pro_li');
        $('.e_navigationF-24 .pro_li .dropdown .left ul .p_navItem2').eq(0).addClass('cur');
        $('.e_navigationF-24 .pro_li .dropdown .center .sj_warp ul').eq(0).addClass('pro_cur');
        if (wind_w > 768) {
            $('.e_navigationF-24 .pro_li .dropdown .left ul').on('mouseenter', 'li', function () {
                $(this).addClass('cur').siblings().removeClass('cur');
                var index = $(this).index();
                $(this).closest('.dropdown').find('.sj_warp ul').eq(index).stop().fadeIn().siblings().hide();
            })
        }
    });



$(function () {
        var swiperFlag = false;
        var wyzVido = new Swiper('.e_bannerD-1 .swiper-container', {
            autoplay: {
                delay: 6000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            speed: 1200,
            loop: true,
            navigation: {
                nextEl: '.e_bannerD-1 .p_btn_next ',
                prevEl: '.e_bannerD-1 .p_btn_prev ',
            },
            pagination: {
                el: '.e_bannerD-1 .p_pagenation',
                clickable: true,
            },
            // 切换完毕事件
            on: {
                init: function () {
                },
                slideChangeTransitionEnd: function () {

                    var _this = $('.e_bannerD-1 .swiper-container .swiper-slide').eq(this.activeIndex);
                    // 执行一下
                    if (!swiperFlag) {
                        swiperFlag = true;
                    } else {
                        videoSelect(_this);
                    }
                }
            }
        });
        videoSelect($('.e_bannerD-1 .swiper-container .swiper-slide.swiper-slide-active'));

        function videoSelect(_this) {
            var cc = _this.find('.videoContent .video').length;
            console.log(cc);
            if (cc) {
                wyzVido.autoplay.stop();
                _this.find('.videoContent .video').trigger('play');

                _this.find('video').bind('ended', function () {
                    wyzVido.slideNext();
                    wyzVido.autoplay.start();
                });
            }
        }


    })


$(".head_lan .lan_con").hover(function () {
    $(this).find(".lan_list").addClass("cur");
  }, function () {
    $(this).find(".lan_list").removeClass("cur");
  })