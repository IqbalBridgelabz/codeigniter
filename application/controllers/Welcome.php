<?php

defined('BASEPATH') OR exit('No direct script access allowed');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Authorization");

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('welcome_message');
	}

	public function addtion()
	{
		// $fname = $_POST['fname'];
		// $lname = $_POST['lname'];
		// $email = $_POST['email'];
		// $password = $_POST['password'];
		// $mobile = $_POST['mobile'];
		// $address = $_POST['address'];
		// $nationality = $_POST['nationality'];
		// $gender = $_POST['gender'];
		// if(isset($_POST['alerts'])){
		// 	$_POST['alerts'] = 1;
		// 	$subscribe = $_POST['alerts'];
		// }
		// else{
		// 	$_POST['alerts'] = 0;
		// 	$subscribe = $_POST['alerts'];
		// }
		// $query = "INSERT INTO tbl_users(fname,lname,email,password,mobile,address,nationality,gender,alerts)
		//  VALUES('$fname',''$lname','$email','$password','$mobile','$address','$nationality','$gender','$subscribe')";
		// if($con->query($query) == true){
		// 	echo "Record Added Successfully";
		// }	
		// else{
		// 	echo "Failed to add Record";
		// }
		//$test=$_POST['Username'];
			$Fname=$_POST['Username'];
			$Lname=$_POST['Username'];
		//	$Email=$_POST['Email'];
		    //$query = "SELECT * FROM login";
			//$this->database->insertUser($data);
			 //$query = "INSERT INTO  login (Firstname,LastName) VALUES('" . $Fname . "','" . $Lname . "','" .$Email."')";
			 $query = "INSERT INTO  login (Firstname,LastName) VALUES('" . $Fname . "','" . $Lname . "')";
			// $stmt->execute($stmt);
			// $this->excute($query);
			 $this->queryRun($query);
	}
	public function queryRun($query)
    {
        if (!($res = $this->db->query($query))) {
            $error = $this->db->error(); // Has keys 'code' and 'message'
            echo json_encode(array("status" => 500, "message" => $error["message"]), JSON_PRETTY_PRINT);
        } else {
         //   var_dump($res);
            if (is_bool($res))
                echo json_encode(array("status" => 200, "message" => "succes"), JSON_PRETTY_PRINT);
            else
                echo json_encode(array("status" => 200, "message" => $res->result()), JSON_PRETTY_PRINT);
        }
    }
}
