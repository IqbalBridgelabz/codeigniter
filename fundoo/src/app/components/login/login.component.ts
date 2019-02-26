import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Email = new FormControl('',{
    // Validators
  })
  Password = new FormControl('',{
    // Validators
  })
  constructor() { }

  ngOnInit() {
  }
  login(){
    console.log(this.Email.value);
    console.log(this.Password.value);
  }

}
