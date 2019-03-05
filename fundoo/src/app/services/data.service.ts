import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  serverUrl = 'http://localhost/codeigniter/register';
  constructor(private http: HttpClient) { }
  postUser(data: any) {
    return this.http.post(this.serverUrl , data);
  }
}
