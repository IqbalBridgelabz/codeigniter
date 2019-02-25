import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegisterModel } from "src/app/models/register.model";
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  user: RegisterModel = new RegisterModel();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {

    // ,Validators.pattern('/[a-zA-Z]$/')

    this.registerForm = this.formBuilder.group({
      firstName: [this.user.firstName, [Validators.required ,,Validators.pattern('/[a-zA-Z]$/') ] ],
      lastName: [this.user.lastName, [Validators.required ,,Validators.pattern('/[a-zA-Z]$/') ]],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required,
      Validators.minLength(6)]],
      phoneNumber: [this.user.phoneNumber, [Validators.required,
      Validators.minLength(10)]]
    });
  }

  onSubmit() {
    var userData = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      password: this.user.password,
      phoneNumber: this.user.phoneNumber
    }
    console.log(userData);

    if (userData.firstName && userData.lastName && userData.email && userData.password && userData.phoneNumber) {
      this.http.post(userData, "user/register").subscribe(
        (data) => {
          console.log("After apply for Register response ", data);
          this.router.navigateByUrl('/otp');
          //this.snackBar.open('OTP send Successful', 'Okay', { duration: 3000 });
        },
        (error) => {
          console.log("After error in register", error);
  
        }
      )
    } else {
       this.snackBar.open('All fields required', 'Okay', { duration: 3000 });
    }
  }
}
