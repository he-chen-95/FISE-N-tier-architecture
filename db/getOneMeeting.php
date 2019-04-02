<?php
	require_once('initialDB.php');

	//get info from form home.html
	$id = $_POST["id"];
	$title = $_POST["title"];

	
	
	//create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// detect connection
	if ($conn->connect_error) {
		die("connection failed: " . $conn->connect_error);
	}
	
	$sql = "SELECT * FROM `$eventTable` WHERE tId =$id AND title=\"$title\"";
	$result = mysqli_query($conn, $sql);
	$dataarr = array();
	while($row = mysqli_fetch_assoc($result)){
		$dataarr = $row;
	}
	echo json_encode($dataarr);
	$conn->close();
?>