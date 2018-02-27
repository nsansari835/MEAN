import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  newTask : any;
  error : string;

  
  constructor(
    private _httpService: HttpService,
    private _route : ActivatedRoute,
    private _router : Router
  ) { } 
     
  ngOnInit() {
    this.newTask = { name: "", price: "", quantity: "" }
  }
     
 onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    console.log(this.newTask, "FORM DATA")
    observable.subscribe(data => {
      console.log("got data from post back", data);
      this.newTask = { name: "", type: "", description: "" }
      if(data['message'] == "Success"){
        this._router.navigate(['/']);
      }
      else{
        this.error = "sorry"
      }
   
    })


  }

}

// this.oneTask = { name: "", type: "", description: "" }
// if(data['message'] == "Success"){
//   this._router.navigate(['/']);
// }
// else{
//   this.error = "sorry"
// }