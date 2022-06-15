import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService:AuthServiceService) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }
  onSubmit(myForm: NgForm):void {
    this._authService.authenticate(myForm.value)

  }

}
