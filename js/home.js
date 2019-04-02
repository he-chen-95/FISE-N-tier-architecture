$(document).ready(function(){

   // 开始写 jQuery 代码...
   $("#insert_btn").on( "click",function(){
   		//e.preventDefault();
//  		alert($("#msg").val() + $("#title").val() + $("#date").val());
   		$.ajax({
                method : "POST",
                url : 'db/insertData.php',
                data: {
					id: $("#tId").html(),
					title: $("#title").val(),
					date: $("#date").val(),
					address: $("#autocomplete").val(),
					message: $("#msg").val(),
					user: $("#user").val(),
					email: $("#email").val(),
				},
                error : function(request){
					console.log(data);
                	alert("connection error");
                },
                success : function(data) {
					console.log(data);
                	alert("Data Saved: " + data);
                }     
       	});
   });

      $("#addUser_btn").on( "click",function(){
   		//e.preventDefault();
//  		alert($("#msg").val() + $("#title").val() + $("#date").val());
   		$.ajax({
                method : "POST",
                url : 'db/addUser.php',
                data: {
					meeting_id: $("#tId").html(),
					user: $("#user").val(),
					email: $("#email").val(),
		   		      },
                error : function(request){
					console.log(data);
                	alert("connection error");
                },
                success : function(data) {
					console.log(data);
                	alert( "Data Saved: " + data );
                }     
       	});
   });
   //chose all
   $("#modify_btn").on( "click",function(){
//	   alert($("#tId").html() + $("#msg").val() + $("#title").val() + $("#date").val());
   		$.ajax({
                method : "POST",
                url : 'db/updateData.php',
                data: {
					meeting_id: $("#tId").html(),
					meeting_title: $("#title").val(),
					meeting_date: $("#date").val(),
					meeting_message: $("#msg").val(),
					meeting_address: $("#autocomplete").val(),
					user: $("#user").val(),
					email: $("#email").val()
				},
                error : function(request){
                	alert("connection error");
                },
                success : function(data) {
                	alert( "update successfully");
                }     
       	});
   });


	$("#delete_btn").on( "click",function(){
//		alert($("#tId").html() + $("#msg").val() + $("#title").val() + $("#date").val());
   		$.ajax({
                method : "POST",
                url : 'db/deleteData.php',
                data: {
						  meeting_id: $("#tId").html()
		   		      },
                error : function(request){
                	alert("connection error");
                },
                success : function(data) {
                	alert( "delete successfully");
                }     
       	});
	});
	$("#tbDB").on( "click",function(){
	$.ajax({
		method : "POST",
		url : 'db/readData.php',
		data: {
			id: $("#tId").html()
		},
		dataType: "json",
		error : function(request){
			alert("connection error");
		},
		success : function(data) {
			var str = "";
			for (var i=0;i<data.length;i++) {
				
				str += "<tr>" +
				"<td align='center'>" + data[i].users + "</td>" +
				"<td align='center'>" + data[i].email + "</td>" +
				"</tr>";
				console.log(data[i].users + " " +data[i].email);
				
			}
			$("#tbody").html(str);
		}
	});
	});

});
