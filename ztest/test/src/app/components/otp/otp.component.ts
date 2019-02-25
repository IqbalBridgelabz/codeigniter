import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterModel } from 'src/app/models/register.model';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  otpForm: FormGroup;

  user: RegisterModel = new RegisterModel();


  constructor(

    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
    private snackBar: MatSnackBar

  ) {

  }

  ngOnInit() {

    this.otpForm = this.formBuilder.group({
      otp: [this.user.otp, [Validators.required,
      Validators.maxLength(6)]]

    });
  }

  onSubmit() {
    var userData = {
      otp: this.user.otp
    }

    this.http.post(userData, "user/userVerification").subscribe(

      (data) => {
        console.log("After OTP Verification & Register ", data);
        this.router.navigateByUrl('/login');
        this.snackBar.open('Register Successful', 'Okay', { duration: 3000 });
      },
      (error) => {
        console.log("After error in OTP Verification & Register ", error);

      }
    )

  }

}
