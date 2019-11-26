$(function(){
	$('.menu-switch').on('click', function(){
		$(this).find('.fas').toggleClass('fa-times');
		$('.menu').toggleClass('opened');
	});
});