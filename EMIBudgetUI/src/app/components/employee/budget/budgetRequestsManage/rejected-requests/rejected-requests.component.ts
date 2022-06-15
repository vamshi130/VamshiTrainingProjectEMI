import { Component, OnInit } from '@angular/core';
import { UserBudgetRequestManageService } from 'src/app/services/user-budget-request-manage.service';

@Component({
  selector: 'app-rejected-requests',
  templateUrl: './rejected-requests.component.html',
  styleUrls: ['./rejected-requests.component.css']
})
export class RejectedRequestsComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six `;
  requests:any;

  constructor(private _userBudgetService:UserBudgetRequestManageService) { }

  ngOnInit(): void {
    let id=sessionStorage.getItem("userId");
    this._userBudgetService.getRejectedBudgetRequests(id).subscribe((res)=>{
      this.requests=res;
      console.log(res);
    })
  }

}
