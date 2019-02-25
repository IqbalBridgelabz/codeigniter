<?php
class User_service extends CI_Model
{
public function __construct()
{
parent:: __construct();
}

public function get_user_details($user_id)
{
return $this->db->get_where("First_App", array('user_id' => $user_id));
}
} 
?>
