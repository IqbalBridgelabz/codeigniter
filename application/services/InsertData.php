<?php
defined('BASEPATH') or exit('No direct script access allowed');

class InsertData extends CI_Controller
{
    private $connect;
    public function __construct()
    {
        parent::__construct();
    }



    public function insertDb($fname, $lname, $address, $email, $password)
    {
        $data = [
            'firstName' => $fname,
			'lastName' => $lname,
			'address' => $address,
            'email' => $email,
            'password' => $password
        ];
        $query = "INSERT into registeruser (fname,lname,address,email,password) values ('$fname','$lname','$address','$email','$password')";
        $stmt = $this->db->conn_id->prepare($query);
        $res = $stmt->execute($data);
        if ($res) {
            $data = array(
                "message" => "200",
            );
            print json_encode($data);
            return "200";
        } else {
            $data = array(
                "message" => "204",
            );
            print json_encode($data);
            return "204";
        }
        return $data;
    }

    public function login($email, $password)
    {
        $data = [
            'email' => $email,
            'password' => $password
        ];
        $query = "SELECT * from registeruser WHERE email ='$email' AND password = '$password' ";
        $stmt = $this->db->conn_id->prepare($query);
        $res = $stmt->execute($data);


        if ($res) {
            $data = array(
                "message" => "200",
            );
            print json_encode($data);
            return "200";
        } else {
            $data = array(
                "message" => "204",
            );
            print json_encode($data);
            return "204";
        }
        return $data;
    }
}

