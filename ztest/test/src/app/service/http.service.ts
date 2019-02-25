import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { environment } from "../../environments/environment";
import { NoteModel } from '../models/notes.model';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Access-Control-Allow-Origin ': 'http://localhost:4200', 'Content-Type': 'application/json' }),

// };

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private url = "http://localhost:8080/FundooNotes";

  token: string = localStorage.getItem("token");

  headers: HttpHeaders = new HttpHeaders();
  header = this.headers.set('token', this.token);


  constructor(private http: HttpClient
  ) {

  }


  post(data: Object, purpose: String) {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('token', this.token);

    return this.http.post(this.url + "/" + purpose, data, { headers: headers });
  }

  get(purpose: String) {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('token', this.token);

    return this.http.get(this.url + "/" + purpose, { headers: headers });
  }

  loginPost(data: Object, purpose: String) {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('token', this.token);

    return this.http.post(this.url + "/" + purpose, data, { headers: headers, observe: 'response' });

    // {headers: new HttpHeaders().set("token", ""), observe: 'response'}
  }

  put(data: Object, purpose: String) {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('token', this.token);

    return this.http.put(this.url + "/" + purpose, data, { headers: headers });
  }

  putBoolean(purpose: String) {

   let data:any = null;

    return this.http.put(this.url + "/" + purpose,data, { headers: this.header });
  }

  delete(purpose: String) {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('token', this.token);

    return this.http.delete(this.url + "/" + purpose, { headers: headers });

  }



}