import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { OtpComponent } from './components/otp/otp.component';
import { AddnoteComponent } from './components/addnote/addnote.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { EditCardComponent } from './components/edit-card/edit-card.component';
import { EditLabelComponent } from './edit-label/edit-label.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegistrationComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'otp',
    component:OtpComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path: '',
        component:AddnoteComponent
      },
      {
        path:'addNote',
        component:AddnoteComponent
      },
      {
        path:'reminder',
        component:ReminderComponent
      },
      {
        path:"edit-label",
        component:EditLabelComponent
      },
      {
        path:'archive',
        component:ArchiveComponent
      },
      {
        path:'trash',
        component:TrashComponent
      }
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
