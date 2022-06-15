import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { logindetails } from '../models/login/login.model';
import { user } from '../models/login/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  data: user;
  public isAuthenticated: any;
  public authenticates = false;
  public authenticateUser: any;
  public authenticateManager: any;
  public logiUrl=environment.apiLoginUrl;

  constructor(private _http: HttpClient, private _route: Router) { }

  public authenticate(signInData: logindetails) {
    var user: user;
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
    debugger;
    var data = JSON.stringify(signInData);
    console.log(data)
    // return this._http.post<any>("https://localhost:44381/api/Login/PostLoginDetails", data, { headers }).subscribe((res) => {
      return this._http.post<any>("logiUrl", data, { headers }).subscribe((res) => {

      console.log("get data from post", res)
      user = res;
      sessionStorage.setItem('userData', JSON.stringify(user));
      if (res == false) {

      }
      this.data = res;
      this.authenticates = true
      this.checkUser(this.data);

    })

  }

  public checkUser(userData: user) :void{
    if (userData.role == "User") {
      this.isAuthenticated = true;
      sessionStorage.setItem("userId", (userData.userId).toString());
      sessionStorage.setItem("isAuthenticated", this.isAuthenticated);
      console.log("service ", this.authenticates)
      this.authenticateUser = true;
      sessionStorage.setItem("isUser", this.authenticateUser)
      sessionStorage.setItem("userName", userData.userName);
      this._route.navigate(['budget']);
    } debugger;
    if (userData.role == "Manager" || userData.role=="SuperManager") {
      this.isAuthenticated = true;
      sessionStorage.setItem("userId", (userData.userId).toString());
      sessionStorage.setItem("isAuthenticated", this.isAuthenticated);
      this.authenticateManager = true;
      sessionStorage.setItem("isManager", this.authenticateManager)
      sessionStorage.setItem("Id", userData.userId.toString());
      sessionStorage.setItem("userName", userData.userName);
      this._route.navigate(['Request']);
    }
    else {

    }
  }
}

