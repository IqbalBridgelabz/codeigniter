import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { OtpComponent } from './components/otp/otp.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddnoteComponent } from './components/addnote/addnote.component';
import { ReminderComponent } from "./components/reminder/reminder.component";
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
import {
  MatButtonModule, MatCheckboxModule, MatSidenavModule, MatInputModule,
  MatToolbarModule, MatExpansionModule, MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { ClickOutsideModule } from 'ng-click-outside';
import { NotesComponent } from './components/notes/notes.component';
import { CardsComponent } from './components/cards/cards.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { EditCardComponent } from './components/edit-card/edit-card.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { EditLabelComponent } from './edit-label/edit-label.component';
import { DashBoadViewService } from "./service/dashboardView.service";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    AddnoteComponent,
    TrashComponent,
    ArchiveComponent,
    OtpComponent,
    ReminderComponent,
    NotesComponent,
    CardsComponent,
    ForgetPasswordComponent,
    EditCardComponent,
    EditLabelComponent,

  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MaterialModule,
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ClickOutsideModule,
    FlexLayoutModule,
    AngularSvgIconModule,
    AmazingTimePickerModule,

    // HttpHeaderResponse,
    // HttpHeaders

    // SocialLoginModule
  ],

  entryComponents: [
    EditCardComponent
  ],
  providers: [DashBoadViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
