$(function(){
	setTimeout(function(){
    $('#header').css({
      "background":"url('img/history/Head-road-2.jpg') 50% 0",
      "background-size":"cover"
    });
    
  },2500);
	setTimeout(function(){
	$('#header').css({
      "background":"url('img/history/Head-road.png') 50% 0",
      "background-size":"cover"
    });
  },3500);

	setTimeout(function(){
		$('#headerText').fadeIn(3000);
	},500);

  $("#myNav").affix({
        offset: {
              top: $("#header").outerHeight(true)
            }
        });
});