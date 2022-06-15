import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { ToastrService } from 'ngx-toastr';
import { budgetDataFullModel } from 'src/app/models/Budget-Model/budgetFullDataModel';

import { budgetModel } from 'src/app/models/budget.model';
import { user } from 'src/app/models/login/user.model';
import { BudgetApprovalService } from 'src/app/services/budget-approval.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {
  public sessionData:user=JSON.parse(sessionStorage.getItem('userData'));

  public budgetReactiveForm:FormGroup;
  public requestData:budgetDataFullModel;
  constructor(private _formBuilder:FormBuilder,private _router:Router, private _budgetApprovalService:BudgetApprovalService,
    private _toastr:ToastrService) { }

  ngOnInit(): void {
    console.log("ngoniniteditrequestdata",this.requestData)
      this.budgetReactiveForm=this._formBuilder.group({
      id:[''],
      purpose:['',[Validators.required,Validators.minLength(4)]],
      costEstimated:[''],
      advanceAmmount:['',[Validators.required]],
      date:['',[Validators.required]],
      description :['',[Validators.required,Validators.minLength(3)]],
      userId:[''],
      managerId:[''],
      status:[''],
      createdOn:[''],
      reportingTo:['']
      
    })
    this.budgetReactiveForm.patchValue({

      id:this.requestData.id,
      purpose:this.requestData.purpose,
      costEstimated:this.requestData.costEstimated,
      advanceAmmount:this.requestData.advanceAmmount,
      description:this.requestData.description,
      date:this.requestData.date,
      userId:this.requestData.userId,
      managerId:this.requestData.managerId,
      status:this.requestData.status,
      createdOn:this.requestData.createdOn,
      reportingTo:this.requestData.reportingTo

    })
  }

  // budgetData=new budgetModel();
 
  public onSubmit(reqdata:NgForm):void{
    console.log("on submiting edit",reqdata)
    this._budgetApprovalService.editBudgetForm(reqdata).subscribe(res=>{
      console.log(res);
      this._toastr.success('Your Request has sent succesfully', 'Hey Congrats ');

    })


  }
  resetForm(){}
  
  
  


}
