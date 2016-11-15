$(function(){
  $('.text-header').fadeIn(4000).delay(900).fadeOut(3000);
  $(window).on('load resize', function windowSize(){
    if ($(window).width() <= '480'){
      $('.header').css({
          "background":"url('img/header-1.png')30% 0",
          "background-size":"cover"
        });     

    setTimeout(function(){
      $('.header').css({
        "background":"url('img/header-2.png')30% 0",
        "background-size":"cover"
      })
    },3000);

    setTimeout(function(){
      $('.header').css({
        "background":"url('img/header-3.png')30% 0",
        "background-size":"cover"
      })
    },5500);
      } else {
        $('.header').css({
          "background":"url('img/header-1.png')50% 0",
          "background-size":"cover"
        });
        
        setTimeout(function(){
          $('.header').css({
            "background":"url('img/header-2.png')50% 0",
            "background-size":"cover"
          })
        },3000);
        setTimeout(function(){
          $('.header').css({
            "background":"url('img/header-3.png')50% 0",
            "background-size":"cover"
          })
        },5500);
      }
  });

      //navbar
    	$("#myNav").affix({
    		offset: {
            	top: $(".header").outerHeight(true)
            }
        });

      //slider
        $('.bxslider').bxSlider({
      buildPager: function(slideIndex){
        switch(slideIndex){
          case 0:
            return '<img src="img/slider/1-min.jpg">';
          case 1:
            return '<img src="img/slider/2-min.jpg">';
          case 2:
            return '<img src="img/slider/3-min.jpg">';
        }
      }
    });

});
