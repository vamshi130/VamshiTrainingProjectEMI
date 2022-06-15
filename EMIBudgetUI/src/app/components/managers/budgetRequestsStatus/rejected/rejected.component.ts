import { Component, OnInit } from '@angular/core';
import { BudgetRequestStatusService } from 'src/app/services/budgetRequestStatusManager/budget-request-status.service';

@Component({
  selector: 'app-rejected',
  templateUrl: './rejected.component.html',
  styleUrls: ['./rejected.component.css']
})
export class RejectedComponent implements OnInit {

  public id= sessionStorage.getItem("Id")
  public requests:any;

  constructor(private _budgetRequestStatusService:BudgetRequestStatusService) { }

  ngOnInit(): void {
    this._budgetRequestStatusService.getRejectedBudgetRequests(this.id).subscribe(response=>{
      console.log("pednign requests of manager",response);
      this.requests=response;
    })
  }

}
