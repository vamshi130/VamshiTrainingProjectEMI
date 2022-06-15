import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { budgetDetails } from 'src/app/models/Budget-Model/budgetDetails.Model';
import { budgetModel } from 'src/app/models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetRequestStatusService {

  constructor(private _http:HttpClient) { }

  public getApprovedBudgetRequests(id:any):Observable<budgetDetails>{
    
    return this._http.get<budgetDetails>("https://localhost:44381/api/BudgetRequestsByStatusForSuperiorRole/GetApprovedBudgetRequests/"+id)

  }
  public getInitiatedBudgetRequests(id:any):Observable<budgetDetails>{
    return this._http.get<budgetDetails>("https://localhost:44381/api/BudgetRequestsByStatusForSuperiorRole/GetInitiatedBudgetRequests/"+id)


  }
  public getRejectedBudgetRequests(id:any):Observable<budgetDetails>{
    return this._http.get<budgetDetails>("https://localhost:44381/api/BudgetRequestsByStatusForSuperiorRole/GetRejectedBudgetRequests/"+id)
  }


}
