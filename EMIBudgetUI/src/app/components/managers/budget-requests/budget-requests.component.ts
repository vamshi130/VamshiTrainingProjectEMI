import { Component, OnInit } from '@angular/core';
import { budgetDetails } from 'src/app/models/Budget-Model/budgetDetails.Model';
import { budgetDataFullModel } from 'src/app/models/Budget-Model/budgetFullDataModel';
import { budgetModel } from 'src/app/models/budget.model';
import { user } from 'src/app/models/login/user.model';
import { BudgetApprovalService } from 'src/app/services/budget-approval.service';

@Component({
  selector: 'app-budget-requests',
  templateUrl: './budget-requests.component.html',
  styleUrls: ['./budget-requests.component.css']
})
export class BudgetRequestsComponent implements OnInit {
  public requests:any;
  public req:budgetDataFullModel
  public id= sessionStorage.getItem("Id")
  public data:any;

  constructor(private _budgetRequestService:BudgetApprovalService) { }

  ngOnInit():void{
    debugger;
    this.data=JSON.parse(sessionStorage.getItem('userData'));
    this._budgetRequestService.getBudgetRequests(this.id).subscribe(
      res=>{
        debugger;
        console.log(res);
        this.requests=res;
        // this.req=res;
      }
    )
  


  }
  public  checkAmmountForUser(dat:any):boolean{
    // console.log("if condituion",this.data)
    // console.log("if condituion",this.data.role)

    if(this.data.role="Manager"){
      if(dat.costEstimated<=5000){
          return true
      }
      return false;
    }
    else if(this.data.role="SuperManager"){
      if(this.req.costEstimated<=20000){
        return true
      }
      return false;
    }
    else{
      return false;
    }
  
  }
  public  checkForwardButton(dat:any):boolean{
    // console.log("if condituion",this.data)
    // console.log("if condituion",this.data.role)

    if(this.data.role="Manager"){
      if(dat.costEstimated>5000){
          return true
      }
      return false;
    }
    else if(this.data.role="SuperManager"){
      if(this.req.costEstimated>20000){
        return true
      }
      return false;
    }
    else{
      return false;
    }
  
  }
 


}
