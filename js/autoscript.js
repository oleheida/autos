$(function(){
$("body").fadeIn(2000);

$(document).ready(function(){
        $("#myTab a").on('click', function(e){
            e.preventDefault();
            $(this).tab('show');
        });
    });

$("#myNav").affix({
		offset: {
        	top: $(".section-3").outerHeight(true)
        }
    });

$('.bxslider').bxSlider({
        auto: true,
        speed: 300,
        pause: 10000,
        mode: 'fade',
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: ' →',
        prevText: '← '
    });
});