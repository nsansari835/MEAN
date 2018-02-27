import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  tasks: any;

  picture = false;

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getTasksFromService();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks()
    observable.subscribe(response => {
      let data = response as any;
      console.log('Got our data!', data)
      this.tasks = data;
    })
  }

  
}
