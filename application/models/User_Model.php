<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class User_Model extends CI_Model{
	public function __construct(){
		parent::__construct();
	}
	public function get_posts(){
		$query = $this->db->get('User');
		if($query->num-rows()>0){
			return $query->result();
		}
	}
	public function get_post($firstName){
		$this->db->where('firstName',$firstName);
		$query = $this->db->get('User');
		return $query->rows();
	}
	public function insert_post($userData){
		$this->db->insert('User',$userData);
		return $this->db->insert_firstName();
	}
}
