<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "myDB";
$eventTable = "Meeting";
$userTable = "Users";


// create connection
$conn = new mysqli($servername, $username, $password);
 
// check connection
if ($conn->connect_error) {
    die("connection failed: " . $conn->connect_error);
} 
//echo "connection succeeded";

$sql = "Create Database If Not Exists `$dbname` Character Set UTF8";
if (mysqli_query($conn, $sql)) {
//    echo "The database was created successfully!";
} else {
    echo "Error creating database: " . mysqli_error($conn);
}


$sql = "CREATE TABLE IF NOT EXISTS `$dbname`.`$eventTable`(
			`tId` int(4) unsigned Primary Key NOT NULL Auto_Increment,
			`title` VARCHAR(64) NOT NULL,
			`date` DATE NOT NULL,
			`address` VARCHAR(255),
			`message` VARCHAR(255))";
			
if ($conn->query($sql) === TRUE) {
//    echo "Table $eventTable created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$sql = "CREATE TABLE IF NOT EXISTS `$dbname`.`$userTable`(
			`uId` int(4) unsigned Primary Key NOT NULL Auto_Increment,
			`users` VARCHAR(64) NOT NULL,
			`email` VARCHAR(255) NOT NULL,
			`eId` int(4) unsigned NOT NULL)";
			
if ($conn->query($sql) === TRUE) {
//    echo "Table $userTable created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}
$conn->close();

?>