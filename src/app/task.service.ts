import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from './Models/task'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _url:string ="/assets/data/tasks.json"
  private toFind;
  constructor(private http:HttpClient) { }

  getTasks() : Observable<ITask[]>{

    return this.http.get<ITask[]>(this._url);
  }
  
  deleteTask(id){
    //this function is not working due to lack of server side.
  }
}
