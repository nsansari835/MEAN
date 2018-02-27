import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  newTask : any;
  onepet = {};
  oneTask : any;
  productID : string;
  error : string;

  constructor(
    private _httpService: HttpService,
    private _route : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit() { 
      
      this._route.params.subscribe((params: Params) =>  this.productID=params['id']);
        console.log("route params",);
      //this.productID = 'id'
      console.log(this.productID, "*********************");
      this.getOneEdit();
      // this.oneTask = { name: "", type: "", description: "" }
    }
      
  
  
  getOneEdit() {
    let observable = this._httpService.getOneTask(this.productID);
    observable.subscribe(data => {
      console.log("got data from post back", data);
      if(data['message'] == "Success"){
        this.oneTask = data['data'];
        console.log(this.oneTask, "THIS ONETASK")
      }
      else{
        this.error = "sorry"
      }
    })
  }

  

  onSubmit() {
    console.log(this.oneTask, "THIS TWWWWOTASK")
    let observable = this._httpService.updateTask(this.oneTask, this.productID);
    observable.subscribe(data => {
      console.log("got data from post back", data);
      this.oneTask = { name: "", quantity: "", price: "" }
      if(data['message'] == "Success"){
        this._router.navigate(['/']);
      }
      else{
        this.error = "sorry"
      }
    })
  }


}


// updateTask(newtask)