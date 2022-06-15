import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { budgetDataFullModel } from '../models/Budget-Model/budgetFullDataModel';
import { budgetModel } from '../models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class UserBudgetRequestManageService {

  constructor(private _http: HttpClient) { }
  public getApprovedBudgetRequests(id: any): Observable<budgetModel[]> {

    return this._http.get<budgetModel[]>("https://localhost:44381/api/BudgetRequestsByStatus/GetApprovedBudgetRequests/" + id)

  }
  public getInitiatedBudgetRequests(id: any): Observable<budgetDataFullModel> {
    return this._http.get<budgetDataFullModel>("https://localhost:44381/api/BudgetRequestsByStatus/GetInitiatedBudgetRequests/" + id)


  }
  public getRejectedBudgetRequests(id: any):Observable<budgetModel> {
    return this._http.get<budgetModel>("https://localhost:44381/api/BudgetRequestsByStatus/GetRejectedBudgetRequests/"+ id)
  }
}
