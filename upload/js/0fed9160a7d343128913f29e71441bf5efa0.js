$(function () {
  	$('.joblist').click(function(){
    	$(this).find('.job_neirong > div').slideToggle();
    	$(this).siblings().find('.job_neirong > div').slideUp();
    });
    // 默认第一条展开，不需要可以直接注释
    //$('.joblist:nth-child(1) .job_neirong > div').show();
});