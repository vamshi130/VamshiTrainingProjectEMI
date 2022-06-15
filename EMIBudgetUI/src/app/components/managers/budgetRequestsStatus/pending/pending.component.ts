import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { budgetDetails } from 'src/app/models/Budget-Model/budgetDetails.Model';
import { budgetDataFullModel } from 'src/app/models/Budget-Model/budgetFullDataModel';
import { user } from 'src/app/models/login/user.model';
import { BudgetApprovalService } from 'src/app/services/budget-approval.service';
import { BudgetRequestStatusService } from 'src/app/services/budgetRequestStatusManager/budget-request-status.service';
import { RejectedReasonPopupComponent } from '../rejected/rejected-reason-popup/rejected-reason-popup.component';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  public id= sessionStorage.getItem("Id")
  public requests:any;
  public data:user;
  public req:any

  constructor(private _budgetRequestStatusService:BudgetRequestStatusService,private _matDialog:MatDialog,private _budgetApprovalService:BudgetApprovalService) { }

  ngOnInit(): void {
    this.data=JSON.parse(sessionStorage.getItem('userData'));
    this._budgetRequestStatusService.getInitiatedBudgetRequests(this.id).subscribe(response=>{
      console.log("pednign requests of manager",response);
      this.requests=response;
      this.req=response;
    })
  }
  public  checkAmmountForUser(dat:any):boolean{
    if(this.data.role=="Manager"){
      if(dat.costEstimated<=5000){
          return true
      }
      return false;
    }
    else if(this.data.role=="SuperManager"){
      if(dat.costEstimated<=20000){
        return true;
      }
      return false;
    }
    else{
      return false;
    }
  
  }
  public  checkForwardButton(dat:any):boolean{
    if(this.data.role=="Manager"){
      if(dat.costEstimated>5000){
          return true
      }
      return false;
    }
    else if(this.data.role=="SuperManager"){
      if(dat.costEstimated>=20000){
        return true
      }
      return false;
    }
    else{
      return false;
    }
  
  }
  public onAccept(budgetRequest:budgetDetails):void{
    debugger;
    budgetRequest.budgetRequest.status="Approved";
    console.log("onAccept",budgetRequest);
    this._budgetApprovalService.editBudgetForm(budgetRequest).subscribe(res=>{
      console.log(res);
    })


  }
  public onForward(budgetRequest:budgetDataFullModel):void{
    debugger;
    budgetRequest.managerId=this.data.managerReportingTo;
    budgetRequest.reportingTo=this.data.managerReportingName;
    console.log("onForwardClick",budgetRequest);

    this._budgetApprovalService.editBudgetForm(budgetRequest).subscribe(res=>{
      console.log(res);
    })

  }
  public onReject(data:any):void{
debugger;
    let dialogRef=this._matDialog.open(RejectedReasonPopupComponent,{ height: '55%', width: '35%' })
    dialogRef.componentInstance.requestedData=data;
 
  }

}
