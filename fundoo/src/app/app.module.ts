import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import {MatFormFieldModule} from '@angular/material/form-field';//
import { MatSelectModule } from '@angular/material';//
import {MatIconModule} from '@angular/material/icon';//
import { MyMaterialModule } from  './material.module';//
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './data.service';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent
  ],


imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    MatIconModule,
    BrowserModule,
    MatInputModule,//
    MatSelectModule,//
    AppRoutingModule,
    MatFormFieldModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },


    ]),

  ],

  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
