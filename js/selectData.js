$(document).ready(function(){
	$.ajax({
		url: "db/getData.php",
		type: "post",
		dataType: "json",
		data:{
			
		},
		success: function (data) {	
			$("#mlist").append("<option value='-1'>--Please Select--</option>");
			if(data.length != 0){
				for(var i=0;i<data.length;i++){
					var id = data[i].tId;
					var title = data[i].title;
					console.log(id + " " + title);
					$("#mlist").append("<option value='"+id+"'>"+title+"</option>");
				}
			}
			alert("loading successfully");
		},
		error: function (data) {
			console.log(data);
			alert("loading error");
		}
	}); 

});