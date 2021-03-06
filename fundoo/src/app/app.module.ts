import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSelectModule } from '@angular/material';//
import {MatIconModule} from '@angular/material/icon';//
import { MyMaterialModule } from  './material.module';//
import { MatFormFieldModule, MatInputModule } from '@angular/material';//

import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    RegistrationComponent
  ],


imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    MatIconModule,
    BrowserModule,
    MatInputModule,//
    MatSelectModule,//
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ShowHidePasswordModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
