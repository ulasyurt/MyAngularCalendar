import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { ITask } from '../Models/task';


@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'deadline' , 'button'];
  public dataSource;
  constructor(private router:Router,private _taskService : TaskService) { }

  ngOnInit(): void {
    this.dataSource=this._taskService.getTasks();
  }

  logOutClicked()
  {
    this.router.navigate(["/mylogin"]);
  }

  addTaskClicked()
  {
    this.router.navigate(["/myaddtask"]);
  }
  onDetailClick(element)
  {
    this.router.navigate(["/myaddtask",element.id]);
  }
  onDeleteClick(element)
  {
    this._taskService.deleteTask(element.id);
  }

}
