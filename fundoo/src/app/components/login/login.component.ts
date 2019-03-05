import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
    console.log(this.Email.value);
    console.log(this.Password.value);
  }
  redirectTo() {
    this.router.navigate(['register']);
  }
}
