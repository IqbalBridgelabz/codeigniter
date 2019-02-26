<?php
defined('BASEPATH') OR exit('No direct script access allowed');
 
class User extends CI_Controller {
	public function __construct() {
		parent::__construct();
		$this->load->model('User_Model');
	}
	public function posts(){
		header("Access-Control-Allow-Origin:*");
		$post = $this->User_Model->get_post();
		$this->output->set_content_type('application/json')->set_output(json_encode($post));
	}
	public function createPost(){
		header("Access-Control-Allow-Origin:*");
		header("Access-Control-Request-Header-Accept,Accept-Language,Content-Language,Content-type");
		$userPost = json_decode(file_get_contents('php://input'),true);
		if(!empty($userPost)){
			$firstName = $userPost['firstName'];
			$lastName = $userPost['lastName'];
			$Email = $userPost['Email'];
			$Password = $userPost['Password'];
		}
		$userData = array(
			'firstName' => $firstName,
			'lastName' => $lastName,
			'Email' => $Email,
			'Password' => $Password
		);
	}
}
