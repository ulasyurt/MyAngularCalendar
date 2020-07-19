import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { TaskService } from '../task.service';


@Component({
  selector: 'app-my-add-task',
  templateUrl: './my-add-task.component.html',
  styleUrls: ['./my-add-task.component.css']
})
export class MyAddTaskComponent implements OnInit {

  public taskTitle;
  public taskDescription;
  public taskDeadline;

  constructor(private router:Router,private activeRouted:ActivatedRoute,private _taskService : TaskService) { }

  ngOnInit(): void {
    
    let id=parseInt(this.activeRouted.snapshot.paramMap.get('id'));
    this._taskService.getTasks().subscribe(data=>{
      let idTemp = data.find(x=>x.id==id);
      this.taskTitle=idTemp.title;
      this.taskDescription=idTemp.description;
      this.taskDeadline=idTemp.deadline;
    });
  }
  cancelClicked(){
    this.router.navigate(["/mytasks"]);
  }
  saveClicked(){
    this.router.navigate(["/mytasks"]);
  }

}
