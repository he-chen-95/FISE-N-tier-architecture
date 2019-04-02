$(document).ready(function(){

   // 开始写 jQuery 代码...
   $( "#mlist").change(function(){
   		//e.preventDefault();
		var checkText=$("#mlist").find("option:selected").text();
		var checkValue=$("#mlist").val();
   		$.ajax({
			method : "POST",
			url : 'db/getOneMeeting.php',
			data: {
				title: checkText,
				id: checkValue
			},
			dataType: "json",
			error : function(request){
				alert("loading error");
			},
			success : function(data) {
				$("#tId").html(data.tId);
				$("#title").val(data.title);
				$("#date").val(data.date);
				$("#autocomplete").val(data.address);
				$("#msg").val(data.message);
			}
		});
	});

});