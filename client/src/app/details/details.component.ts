import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  newTask : any;
  onepet = {};
  oneTask : any;
  petID : string;
  error : string;
  qty = false;

  constructor(
    private _httpService: HttpService,
    private _route : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit() { 
      
      this._route.params.subscribe((params: Params) =>  this.petID=params['id']);
        console.log("route params",);
      //this.petID = 'id'
      console.log(this.petID, "*********************");
      this.getOneEdit();
      // this.oneTask = { name: "", type: "", desc: "" }
    }
      
  
  
  getOneEdit() {
    let observable = this._httpService.getOneTask(this.petID);
    observable.subscribe(data => {
      console.log("got data from post back", data);
      if(data['message'] == "Success"){
        this.oneTask = data['data'];
      }
      else{
        this.error = "sorry"
      }
    })
  }

  

  onSubmit() {
    let observable = this._httpService.addLike(this.oneTask, this.petID);
    observable.subscribe(data => {
      console.log("got data from post back", data);
      this.oneTask = { like : "" }
      console.log(this.oneTask, "FO DA LIKE")
      this.getOneEdit();
      // if(data['message'] == "Success"){
      //   this._router.navigate(['/']);
      // }
      // else{
      //   this.error = "sorry"
      // }
    })
  }

  onSubmits() {
    if(this.oneTask.quantity == 0){
    let observable = this._httpService.deletePet(this.petID);
    observable.subscribe(data => {
      console.log("got data from post back", data);
      
      this.oneTask = { like : "" }
      console.log(this.oneTask, "FO DA LIKE")
      if(data['message'] == "Success"){
        this._router.navigate(['/']);
      }
    
      else{
        this.error = "sorry"
      }
    })
  }
  else{
    this.qty = true;
  }  
  }

}


// updateTask(newtask) 