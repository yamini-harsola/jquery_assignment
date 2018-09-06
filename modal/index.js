$(document).ready(()=>{
	$("#myBtn").click(()=>{
		$('#myModal').show();
	})
	$(".close").click(()=>{
		$('#myModal').hide();
	})
	$(window).click((e)=>{
		if(e.target == $('#myModal'))
		{
			$('#myModal').hide();
		}
	})
})

