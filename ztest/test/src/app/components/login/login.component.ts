import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/models/register.model';
import { HttpService } from "../../service/http.service";
import { MatSnackBar } from '@angular/material';
// import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable()
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;

  user: RegisterModel = new RegisterModel();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
    private snackBar: MatSnackBar,
    // private header: HttpHeaders,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required,
      Validators.minLength(6)]]
    }); 
  } 
  onSubmit() {
    var userData = {
      email: this.user.email,
      password: this.user.password
    }

    this.http.loginPost(userData, "user/login").subscribe(

      (response: any) => {
        console.log("After login response", response);
        localStorage.setItem('loginItem', JSON.stringify(response.body));
        localStorage.setItem('token', response.headers.get('token'));
        this.router.navigateByUrl('/dashboard');

        this.snackBar.open('Login Successful', 'Okay', { duration: 2000 });
      },
      (error) => {
        console.log("After error in login", error);
        this.snackBar.open('Invalid User Credentials', 'Okay', { duration: 2000 });

      }


    )
  }
}