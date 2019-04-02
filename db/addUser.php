<?php
require_once('initialDB.php');

//get info from form home.html
$meeting_id = $_POST["meeting_id"];
$user = $_POST["user"];
$email = $_POST["email"];


// create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// detect connection 
if ($conn->connect_error) {
    die("connection failed: " . $conn->connect_error);
} 

if(isset($user) && !empty($user) && isset($email) && !empty($email)){
	if(!filter_var($email,  FILTER_VALIDATE_EMAIL)){
		echo "email error";
	}else{
		$sql = "SELECT * FROM `$userTable` WHERE eId =$meeting_id AND email=\"$email\"";
		$result = $conn->query($sql);
		if ($result->num_rows == 0) {
				$sql = "INSERT INTO $userTable (users, email, eId) VALUES ('$user', '$email', '$meeting_id')";
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
$conn->close();
?>