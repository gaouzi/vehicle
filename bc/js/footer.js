var $one = $('.findmoretwo-one')
var $two = $('.findmoretwo-two')

var $three = $('.findmoreleft-one')
var $four = $('.findmoreleft-two')

var $five = $('.findmoreright-one')
var $six = $('.findmoreright-two')

$('.findmoretwo').mouseover (function () {
	$one.stop().fadeIn();
	$two.addClass('findmoretwo-two-none');

})

$('.findmoretwo-one').mouseleave (function () {
	$one.stop().fadeOut();
	$two.removeClass('findmoretwo-two-none');
})


$('.findmoreleft').mouseover (function () {
	$four.stop().fadeIn();
	$three.addClass('findmoreleft-one-none');

})

$('.findmoreleft-two').mouseleave (function () {
	$four.stop().fadeOut();
	$three.removeClass('findmoreleft-one-none');
})

$('.findmoreright').mouseover (function () {
	$six.stop().fadeIn();
	$five.addClass('findmoreright-one-none');

})

$('.findmoreright-two').mouseleave (function () {
	$six.stop().fadeOut();
	$five.removeClass('findmoreright-one-none');
})