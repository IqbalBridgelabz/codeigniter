
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_Model extends CI_Model
{
  public function __construct()
  {
    parent::__construct();
  }
  
  public function get_posts()
  {
    $query = $this->db->get('User');
    
    if($query->num_rows() > 0){
      return $query->result();
    }
  }
  
  public function get_post($id)
  {
    $this->db->where('id', $id);
    $query = $this->db->get('User');
    return $query->row();
  }
  
  public function insert_post($userdata)
  {
    $this->db->insert('User', $userdata);
    return $this->db->insert_id();
  }
}
?>
