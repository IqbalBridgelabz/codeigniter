import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {



  firstName = new FormControl('', [Validators.required])
  lastName = new FormControl('', [Validators.required])
  address = new FormControl('', [Validators.required])
  email = new FormControl('', [Validators.required])
  password = new FormControl('', [Validators.required])

  constructor(
    private router: Router,
    private regService: DataService
  ) { }

  ngOnInit() {

  }
  register() {
    // console.log(this.firstName.value);
    // console.log(this.lastName.value);
    // console.log(this.Address.value);
    // console.log(this.Email.value);
    // console.log(this.Password.value);
    // this.Data.Service.register(valu)
     //debugger;
    let userData = {
      'firstName': this.firstName.value,
      'lastName': this.lastName.value,
      'email': this.email.value,
      'password': this.password.value,
      'address': this.address.value,
    }
console.log(userData);
    this.regService.postUser(userData).subscribe(
      data => {

        console.log(userData);

      }

    )
  }
  redirectTo() {
    this.router.navigate(['login']);
  }
}
