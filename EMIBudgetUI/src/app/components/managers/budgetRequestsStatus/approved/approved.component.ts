import { Component, OnInit } from '@angular/core';
import { BudgetRequestStatusService } from 'src/app/services/budgetRequestStatusManager/budget-request-status.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {
  public id= sessionStorage.getItem("Id")
  public requests:any;

  constructor(private _budgetRequestStatusManager:BudgetRequestStatusService) { }

  ngOnInit(): void {

    this._budgetRequestStatusManager.getApprovedBudgetRequests(this.id).subscribe(res=>{
      console.log("manager approved requests",res);
      this.requests=res;
    })
  }

}
