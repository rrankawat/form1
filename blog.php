<?php

// mysqli connection
$connect = mysqli_connect("localhost", "root", "", "form1");

if(isset($_POST['title']) && isset($_POST['body'])) {

	$title = mysqli_real_escape_string($connect, $_POST['title']);
	$body = mysqli_real_escape_string($connect, $_POST['body']);

	$sql = "INSERT INTO tbl_form(title, body) VALUES('".$title."', '".$body."')";

	if(mysqli_query($connect, $sql)){
		echo "Post success!";
	}
}
