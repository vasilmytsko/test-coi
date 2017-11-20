/* parallax*/
$(window).scroll(function(){
   var st =$(this).scrollTop();
    $(".header img").css({
       "transform" : "translate(0%, " + st/50 + "%"
    });
});

/* hamburger*/
$(document).ready(function(){
    $('.icon').click(function(){
        $('.icon').toggleClass('active');
    });
});
/* load*/

$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});

/* placeholder*/
$(function () {
    $('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
        });
    });
});