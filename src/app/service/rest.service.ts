import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient) { }

   url = "https://jsonplaceholder.typicode.com/posts";
   
  getdata() {
    
    return this._http.get(this.url);
  }


}
