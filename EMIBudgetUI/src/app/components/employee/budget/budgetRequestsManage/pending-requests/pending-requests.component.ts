import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { budgetDataFullModel } from 'src/app/models/Budget-Model/budgetFullDataModel';
import { budgetModel } from 'src/app/models/budget.model';
import { BudgetApprovalService } from 'src/app/services/budget-approval.service';
import { UserBudgetRequestManageService } from 'src/app/services/user-budget-request-manage.service';
import { EditRequestComponent } from './edit-request/edit-request.component';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six `;
  public initiatedRequests:any

  constructor(private _userBudgetService:UserBudgetRequestManageService,private _matDialog:MatDialog, private _budgetService:BudgetApprovalService) { }

  ngOnInit(): void {
    let id=sessionStorage.getItem("userId");
    this.getBudgetRequests(id);
    this._budgetService.RefreshedComponent.subscribe(()=>{
      this.getBudgetRequests(id);
    })
    
  }

  public getBudgetRequests(id:any):void{
    
    this._userBudgetService.getInitiatedBudgetRequests(id).subscribe((res)=>{
      console.log('intitated requests',res);
      this.initiatedRequests=res;
    })

  }
 public onEdit(requestData:budgetDataFullModel):void{
   debugger;
   console.log("onedit",requestData);
    let dialogRef=this._matDialog.open(EditRequestComponent,{ height: '90%', width: '70%' })
    dialogRef.componentInstance.requestData=requestData;
  }
 
}
