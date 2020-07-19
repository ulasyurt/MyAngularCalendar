import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { Router } from '@angular/router'

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.css']
})
export class MyLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  userModel=new User("","");

  onClick()
  {
    if(this.userModel.name=="mycalendar@angular.com" && this.userModel.password=="1234")
    {
      this.router.navigate(["/mytasks"]);
    }
  }

}
