import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { budgetModel } from '../models/budget.model';
import { user } from '../models/login/user.model';
import { budgetDataFullModel } from '../models/Budget-Model/budgetFullDataModel';
import { budgetDetails } from '../models/Budget-Model/budgetDetails.Model';

@Injectable({
  providedIn: 'root'
})
export class BudgetApprovalService {
  public sessionData:user=JSON.parse(sessionStorage.getItem('userData'));

  public date = new Date(Date.now());

  public response: any

  public user: user;
  private _refreshComponent = new Subject<void>()
  get RefreshedComponent() {
    return this._refreshComponent;
  }
  constructor(private _httpClient: HttpClient) { }




  public postBudgetForm(budgetModel: any) {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');

    this.user = JSON.parse(sessionStorage.getItem("userData")!) as user
    console.log(this.user);
    budgetModel.status = "Pending";
    budgetModel.userId = this.user.userId;
    budgetModel.managerId = this.user.roleId;
    budgetModel.createdOn = this.date;
    budgetModel.reportingTo=this.sessionData.manager;
    var budget: budgetModel[];
    budget = budgetModel;
    var data = JSON.stringify(budget);
    console.log(data);
    return this._httpClient.post<budgetDataFullModel>("https://localhost:44381/api/BudgetRequestManage/PostBudgetRequests", data, { headers: headers })
  }
  public editBudgetForm(budgetModel: any){
    debugger;
    return this._httpClient.put<budgetDataFullModel>("https://localhost:44381/api/BudgetRequestManage/PutBudgetRequests", budgetModel)
      .pipe(tap(() => {
        this.RefreshedComponent.next()
      }))
  }

  public getBudgetRequests(id: any): Observable<budgetDetails> {
    let manager = id;
    debugger;
    return this._httpClient.get<budgetDetails>("https://localhost:44381/api/BudgetRequestManage/GetManagerBudgetRequests/" + id);

  }
  public getUserBudgetRequests(id: any): Observable<budgetModel> {
    return this._httpClient.get<budgetModel>("https://localhost:44381/api/BudgetRequests/GetBudgetRequests/" + id)
  }

}

















 // "https://localhost:44358/api/BudgetRequests/PostBudgetRequests"

  // public getBudgetRequests(id:any){
  //   let manager=id;
  //   this._httpClient.get("http://localhost:7000/budgetData").subscribe(res=>{
  //     console.log(res);
  //     // let data=res;
  //     this.getRequests(res,manager);
  //   })

  // }
  // public getRequests(data:any,id:any){
  //   this.response=(data.find((x:any)=>{
  //     return x.managerId==id
  //   }))
  //   console.log(this.response);
  // }