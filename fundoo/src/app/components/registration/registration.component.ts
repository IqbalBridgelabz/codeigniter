import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  firstName = new FormControl('', {
    // Validators
  })
  lastName = new FormControl('', {
    // Validators
  })
  Address = new FormControl('', {
    // Validators
  })
  Email = new FormControl('', {
    // Validators
  })
  Password = new FormControl('', {
    // Validators
  })

  constructor() { }

  ngOnInit() {

  }

  register() {
    console.log(this.firstName.value);
    console.log(this.lastName.value);
    console.log(this.Address.value);
    console.log(this.Email.value);
    console.log(this.Password.value);

  }

}
