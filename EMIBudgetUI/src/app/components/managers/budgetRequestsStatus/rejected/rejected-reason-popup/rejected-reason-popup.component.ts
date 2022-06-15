import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { budgetDetails } from 'src/app/models/Budget-Model/budgetDetails.Model';
import { budgetDataFullModel } from 'src/app/models/Budget-Model/budgetFullDataModel';
import { rejectionReason } from 'src/app/models/Budget-Model/rejectionReason.model';
import { BudgetApprovalService } from 'src/app/services/budget-approval.service';

@Component({
  selector: 'app-rejected-reason-popup',
  templateUrl: './rejected-reason-popup.component.html',
  styleUrls: ['./rejected-reason-popup.component.css']
})
export class RejectedReasonPopupComponent implements OnInit {
  public rejectionReason:string;
  public requestedData:budgetDetails;
  constructor(private _formBuilder:FormBuilder,private _budgetApprovalService:BudgetApprovalService,private matDialogRef:MatDialogRef<RejectedReasonPopupComponent>) { }

  ngOnInit(): void {
    
    
  }
  public rejectionReactiveForm=this._formBuilder.group({
    rejectionReason:['',Validators.required]
  })
  public onSubmit(reason:rejectionReason){
    this.requestedData.budgetRequest.rejectionReason=reason.rejectionReason;
    this.requestedData.budgetRequest.status="Rejected";
    debugger;
    this._budgetApprovalService.editBudgetForm(this.requestedData.budgetRequest).subscribe(res=>{
      console.log(res);
    })
    console.log(this.requestedData);

  }
  public closeDialog(){
    this.matDialogRef.close();
  }

}
