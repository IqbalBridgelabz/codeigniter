<?php

defined('BASEPATH') or exit('No direct script access allowed');
include "/var/www/html/codeigniter/application/services/InsertData.php";
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Origin: *");
class Register extends CI_Controller
{
    private $refService = "";
    public function __construct()
    {
        parent::__construct();
         $this->refService = new InsertData();
    }

    public function insertUser(){
        $fname = $_POST['firstName'];
		$lname = $_POST['lastName'];
		$address = $_POST['address'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $res =  $this->refService->insertDb($fname,$lname,$address,$email,$password);

        return $res;
    }

    public function selectuser(){
        $email = $_POST['email'];
        $password = $_POST['password'];

        $res = $this->refService->login($email,$password);  

        return $res;
    }
}

?>
