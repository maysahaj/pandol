
$(document).ready(function(){
    var scrollTop =0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop > 100){
			$('.backTop').addClass ('visible');
			
        }else if (scrollTop < 100){
			$('.backTop').removeClass ('visible');
        };
    });
	$('.backTop').click (function(){
		$('body , html').animate({
			scrollTop:0
		},800);
	});
});



