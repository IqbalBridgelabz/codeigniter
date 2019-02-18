<?php
include_once('config.php');
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$password = $_POST['password'];
$mobile = $_POST['mobile'];
$address = $_POST['address'];
$nationality = $_POST['nationality'];
$gender = $_POST['gender'];
if(isset($_POST['alerts'])){
	$_POST['alerts'] = 1;
	$subscribe = $_POST['alerts'];
}
else{
	$_POST['alerts'] = 0;
	$subscribe = $_POST['alerts'];
}
$query = "INSERT INTO tbl_users(fname,lname,email,password,mobile,address,nationality,gender,alerts)
 VALUES('$fname',''$lname','$email','$password','$mobile','$address','$nationality','$gender','$subscribe')";
if($con->query($query) == true){
	echo "Record Added Successfully";
}	
else{
	echo "Failed to add Record";
}
?>
