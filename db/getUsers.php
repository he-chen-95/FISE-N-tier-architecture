<?php
	require_once('initialDB.php');

	$conn = new mysqli($servername, $username, $password, $dbname);
	// detect connection
	if ($conn->connect_error) {
		die("connection failed: " . $conn->connect_error);
	}
	
	//insert information to DB
	$sql = "SELECT * FROM `$userTable`";
	$result = mysqli_query($conn, $sql);
	$dataarr = array();
	while($row = mysqli_fetch_assoc($result)){
		$dataarr[] = $row;

	}
	echo json_encode($dataarr);
	$conn->close();
?>
