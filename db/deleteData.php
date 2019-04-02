<?php
require_once('initialDB.php');

//get info from form home.html
$meeting_id = $_POST["meeting_id"];

// create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// detect connection 
if ($conn->connect_error) {
    die("connection failed: " . $conn->connect_error);
} 

// delete information from DB
$sql = "DELETE FROM $eventTable WHERE tId='$meeting_id'"; 
if ($conn->query($sql) === TRUE) {
    echo "delete from $eventTable succeed";
} else {
       echo "Error: " . $sql . "<br>" . $conn->error;
}
$sql = "DELETE FROM $userTable WHERE eId='$meeting_id'"; 
if ($conn->query($sql) === TRUE) {
    echo "delete from $userTable succeed";
} else {
       echo "Error: " . $sql . "<br>" . $conn->error;
}
//close connection
$conn->close();
?>
