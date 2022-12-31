import { Component, OnInit,Input } from '@angular/core';
import { RestService } from './service/rest.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  products: any[] = [];
  
  constructor(public _rest: RestService, private _http:HttpClient) {

  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this._rest.getdata().subscribe((data: any) => {
      console.log(data);
      this.products = data as any;
      console.log("data:" + this.products);
    }, (err) => {
      console.log(err);
    })
  }



}
