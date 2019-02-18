<?php
$servername = "localhost";
$username = "root";
$password = "root";
$database="testing";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt=$conn->prepare("SELECT name,email from register");
   
    $stmt->execute();
    $d=array();
   foreach ($stmt->fetchAll() as $row) {
     
    $d['register'][] = array('name' =>$row['name'], 'email' =>$row['email']);
}

   echo  json_encode($d);
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
?>
