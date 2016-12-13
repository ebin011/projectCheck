
//$("#btn1").on('click',function()
function display(number)
{

$.ajax({
	
	type:"GET",
	url:"http://localhost:3000/user"+number,

	error: function() {
		$(demo).html('<p>An error has occurred</p>');
		},
					
	success: function(data) {
		window.setTimeout(function(){
		$('#'+number).html("");
		$('#'+number).append(data.name);
		console.log("Name"+data.name);
		},5000);
		}
});
//});

}

