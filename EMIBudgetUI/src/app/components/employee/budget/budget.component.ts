import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BudgetApprovalService } from 'src/app/services/budget-approval.service';
import { ToastrService } from 'ngx-toastr';
import { budgetModel } from 'src/app/models/budget.model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder,private _router:Router, private _budgetApprovalService:BudgetApprovalService,
               private _toastr:ToastrService) { }

  ngOnInit(): void {
  }
  budgetData=new budgetModel();

  public budgetReactiveForm=this._formBuilder.group({
    purpose:['',[Validators.required,Validators.minLength(4)]],
    costEstimated:[''],
    advanceAmmount:['',[Validators.required]],
    date:['',[Validators.required]],
    description :['',[Validators.required,Validators.minLength(3)]],
    userId:[''],
    managerId:[''],
    status:[''],
    createdOn:['']

  })
  formDirective:FormGroupDirective;
  public onSubmit(form:NgForm){
    
    console.log("on post submit",budgetModel);
    // let form1:budgetModel=form.value;
    // form1.userId=1;
    this._budgetApprovalService.postBudgetForm(form).subscribe((response)=>{
      console.log(response);
      this.resetForm();
      this._toastr.success('Your Request has sent succesfully', 'Hey Congrats ');
    });
    

  }
  public resetForm():void{
    this.budgetReactiveForm.reset();
    this.budgetReactiveForm.controls['purpose'].setErrors(null);
    this.budgetReactiveForm.controls['costEstimated'].setErrors(null);
    this.budgetReactiveForm.controls['advanceAmmount'].setErrors(null);
    this.budgetReactiveForm.controls['date'].setErrors(null);
    this.budgetReactiveForm.controls['description'].setErrors(null);
  }

}
