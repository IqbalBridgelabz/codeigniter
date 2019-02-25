import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { UpperCasePipe } from '@angular/common';
import { EditLabelComponent } from 'src/app/edit-label/edit-label.component';
import { DashBoadViewService } from 'src/app/service/dashboardView.service';
//import  { AddnoteComponent}  from "../addnote/addnote.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public headerName = "Fundoo Notes";

  view = "row";
  viewTooltip = "Grid View";
  icon = "view_agenda_outline";
  firstName: String;
  lastName: String;
  email: String;
  userId: number;
  name: String;
  nameFirstLetter: String;


  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private data: DashBoadViewService,

  ) {

  }

  ngOnInit() {
    let userCredentials = JSON.parse(localStorage.getItem("loginItem"));

    this.nameFirstLetter = userCredentials.data.firstName[0].toUpperCase();

    if (userCredentials.data.lastName) {
      this.name = userCredentials.data.firstName + " " + userCredentials.data.lastName;
    } else {
      this.name = userCredentials.data.firstName;


    }

    this.firstName = userCredentials.data.firstName;
    this.lastName = userCredentials.data.lastName;
    this.email = userCredentials.data.email;
    this.userId = userCredentials.data.userId;
  }

  logout() {
    this.router.navigateByUrl('/login');
    localStorage.removeItem('loginItem');
    localStorage.removeItem('jwtToken');

    //this.snackBar.open('Logout Successful', 'Okay', { duration: 3000 })
  }

  openEditLabelDialog() {

    const dialogRef = this.dialog.open(EditLabelComponent
      //  {data: item}
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.http.post(item, "note/updateNote").subscribe(

      // )
      // this.messageEvent.emit("emit from child");

    });

  }

  toggleGridList() {

    if (this.icon === 'view_agenda_outline') {
      this.icon = 'dashboard';
      this.viewTooltip = 'Grid View';
      this.data.viewMessage("column");
    } else {
      this.icon = 'view_agenda_outline';
      this.viewTooltip = 'List View';
      // this.data.viewMessage("column");
      this.data.viewMessage("row");

    }

  }



}
