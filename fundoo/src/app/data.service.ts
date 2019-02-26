import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {user} from './user';
@Injectable({
  providedIn: 'root'
})
export class DataService {
serverUrl = 'http://localhost/codeigniter';
  constructor(private http: HttpClient) { }
  // getUserPost(){
  //   return this.http.get<user[]>
  // }
}
