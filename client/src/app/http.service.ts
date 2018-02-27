import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {
  petID : any;

  constructor(private _http: HttpClient) {
    // this.getTasks();

  }
  getTasks(){
    return this._http.get('/getall')
  }
  removeTasks() {
    return this._http.get('/tasks/remove/:title')
  }
  addTask(newTask){
    return this._http.post('/addproduct', newTask)
  }
  updateTask(oneTask,_id){
    console.log(oneTask, "SERVICE UPDATE" )
    return this._http.put('/alter/'+_id, oneTask)
  }
  getOneTask(_id){
    return this._http.get('/getone/'+_id)
  }
  getOnePetID(){
    return this.petID;
  }
  deletePet(_id){
    return this._http.delete('/delete/'+_id)
  }
  addLike(oneTask, _id){
    return this._http.patch('/increment/'+_id, oneTask)
  }

}
