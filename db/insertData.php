<?php
require_once('initialDB.php');

//get info from form home.html
$id = $_POST["id"];
$title = $_POST["title"];
$date = $_POST["date"];
$message = $_POST["message"];
$address = $_POST["address"];
$user = $_POST["user"];
$email = $_POST["email"];

/*
//test 1
$title = "rdv5";
$date = "2018-11-25";
$message = "sdhkj";
$id = null;
$address = "32 rue emile littre";
$user = "adam";
$email = "adam@example.com";
*/
echo $id." ".$title." ".$date." ".$message." ".$address." ".$user." ".$email;
// create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// detect connection 
if ($conn->connect_error) {
    die("connection failed: " . $conn->connect_error);
} 

//insert information to DB
$sql = "INSERT INTO $eventTable (title, date, address, message) VALUES ('$title', '$date', '$address', '$message')";
 
if ($conn->query($sql) === TRUE) {
    echo "Insert Event Successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
if($id == null){
	$sql = "SELECT `tId` FROM `$eventTable` WHERE title=\"$title\" AND message=\"$message\" AND date=\"$date\" AND address=\"$address\"";
	$result = mysqli_query($conn, $sql);
	$dataarr = array();
	while($row = mysqli_fetch_assoc($result)){
		$dataarr = $row;
	}
	$id = $dataarr['tId'];
}

	echo $id;
if(isset($user) && !empty($user) && isset($email) && !empty($email)){
	if(!filter_var($email,  FILTER_VALIDATE_EMAIL)){
		echo "email error";
	}else{
		$sql = "SELECT * FROM `$userTable` WHERE eId =$id AND email=\"$email\"";
		echo $sql;
		$result = $conn->query($sql);
		echo $result->num_rows;
		if ($result->num_rows == 0) {
				$sql = "INSERT INTO $userTable (users, email, eId) VALUES ('$user', '$email', '$id')";
				echo $sql;
				if ($conn->query($sql) === TRUE) {
					echo "Insert User Successfully";
				} else {
					echo "Error: " . $sql . "<br>" . $conn->error;
				}
		}else{
			echo "User has already inscripted";
	}
}
}
//close connection
$conn->close();
?>
