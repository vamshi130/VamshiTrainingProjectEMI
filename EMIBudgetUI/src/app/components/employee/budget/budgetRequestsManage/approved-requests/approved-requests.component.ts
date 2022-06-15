import { Component, OnInit } from '@angular/core';
import { budgetModel } from 'src/app/models/budget.model';
import { UserBudgetRequestManageService } from 'src/app/services/user-budget-request-manage.service';

@Component({
  selector: 'app-approved-requests',
  templateUrl: './approved-requests.component.html',
  styleUrls: ['./approved-requests.component.css']
})
export class ApprovedRequestsComponent implements OnInit {
  public requests:any;

  longText = `The Shiba Inu is the smallest of the six `;
  constructor(private _userBudgetService:UserBudgetRequestManageService) { }

  ngOnInit(): void {
    let id=sessionStorage.getItem("userId");
    this._userBudgetService.getApprovedBudgetRequests(id).subscribe((res)=>{
      console.log(res);
      this.requests=res;
    })
  }
}
