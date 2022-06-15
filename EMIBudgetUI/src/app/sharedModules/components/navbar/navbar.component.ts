import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isManager:any;
  public isUser:any;
  public isAuthenticated:any;
  public userName:any;
  public managerName:any;


  constructor(public authenticate:AuthServiceService,private _router:Router) { }
  
  

  ngOnInit(): void {
    console.log("checking navabar",this.authenticate.authenticates)
    this.isAuthenticated=sessionStorage.getItem("isAuthenticated")
    this.isUser=sessionStorage.getItem("isUser")
    this.isManager=sessionStorage.getItem("isManager")
    this.userName=sessionStorage.getItem("userName")

    console.log("navbar is user",this.isUser)

  }
  public LogOut(){
    sessionStorage.clear();
    this._router.navigate(['']);
  }
  

}
