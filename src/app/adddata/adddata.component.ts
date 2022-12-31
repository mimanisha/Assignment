import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit  {

  product: any[] = [];

  addfrom : FormGroup;

  constructor(private _rest:RestService, private _http:HttpClient) {
    this.addfrom = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      userId: new FormControl(''),
    })
  }

  ngOnInit(): void{
  }

  postdata() {
      this._http.post(this._rest.url, {
        product:this.addfrom.value
      }).toPromise().then((response:any)=>{
        console.log(response);
        this.product = response.data;
      }
 )}

}
