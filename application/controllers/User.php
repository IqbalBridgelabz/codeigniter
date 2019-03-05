
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {
  
  public function __construct()
  {
    parent::__construct();
    $this->load->model('User_Model');
  }
  
  public function posts()
  {
    header("Access-Control-Allow-Origin: *");
    
    $posts = $this->User_Model->get_posts();
    
    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($posts));
  }
  
  public function createPost()
  {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
    header('Access-Control-Allow-Headers: Accept,Accept-Language,Content-Language,Content-Type');
    
    $userpost = json_decode(file_get_contents('php://input'), true);
    
    if( ! empty($userpost)) {

      $fName = $userpost['fName'];
      $lName = $userpost['lName'];
	  $eamil = $userpost['eamil'];
	  $password = $userpost['password'];

      $blogdata = array(
        'fName' => $fName,
        'lName' => $lName,
        'eamil' => $eamil,
        'password' => $password,
        'created_at' => date('Y-m-d H:i:s', time())
      );
      
      $id = $this->User_Model->insert_post($blogdata);
      
      $response = $this->User_Model->get_post($id);
    }
    else {
      $response = array();
    }
    
    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }
}
?>
