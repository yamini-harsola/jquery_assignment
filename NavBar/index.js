$(document).ready(function(){
	let width = $(window).width(); 
    let height = $(window).height();
    console.log(width+" "+height); //refresh the screen each time to see the responsiveness
	if(width<=480)
	{
      $("button").click(function(e){
      	e.preventDefault();
      	$("ul").slideToggle();
      });
    }
});