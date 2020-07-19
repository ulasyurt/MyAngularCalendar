import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { MyLoginComponent } from './my-login/my-login.component';
import { MyAddTaskComponent } from './my-add-task/my-add-task.component'


const routes: Routes = [
  {path:"",redirectTo:"/mylogin",pathMatch:"full"},
  {path:"mylogin",component:MyLoginComponent},
  {path:"mytasks", component:MyTasksComponent},
  {path:"myaddtask", component:MyAddTaskComponent},
  {path:"myaddtask/:id", component:MyAddTaskComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
