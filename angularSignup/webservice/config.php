<?php
define('BASE_PATH', 'http://localhost/codeigniter/angularSignup/webservice');
define('DB_HOST', 'localhost');
define('DB_NAME', 'sample');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'root');
$con = new PDO(DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD);
// if (mysqli_connect_errno()) {
// 	echo ('Failed to Connect' . mysqli_connect_errno());
// 	exit();
// }
//  else {
$sql = 'SELECT * from tbl_users';


