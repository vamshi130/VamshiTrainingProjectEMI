import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BudgetComponent } from './components/employee/budget/budget.component';
import { ApprovedRequestsComponent } from './components/employee/budget/budgetRequestsManage/approved-requests/approved-requests.component';
import { CompletedRequestsComponent } from './components/employee/budget/budgetRequestsManage/completed-requests/completed-requests.component';
import { PendingRequestsComponent } from './components/employee/budget/budgetRequestsManage/pending-requests/pending-requests.component';
import { RejectedRequestsComponent } from './components/employee/budget/budgetRequestsManage/rejected-requests/rejected-requests.component';
// import { ViewRequestsComponent } from './components/employee/view-requests/view-requests.component';
import { BudgetRequestsComponent } from './components/managers/budget-requests/budget-requests.component';
import { ApprovedComponent } from './components/managers/budgetRequestsStatus/approved/approved.component';
import { CompletedComponent } from './components/managers/budgetRequestsStatus/completed/completed.component';
import { PendingComponent } from './components/managers/budgetRequestsStatus/pending/pending.component';
import { RejectedComponent } from './components/managers/budgetRequestsStatus/rejected/rejected.component';
import { NavbarComponent } from './sharedModules/components/navbar/navbar.component';

const routes: Routes = [
  {path:'navbar',component:NavbarComponent},
  {path:'budgetRequest',component:BudgetComponent},
  {path:'pendingRequests',component:PendingRequestsComponent},
  {path:'approvedRequests',component:ApprovedRequestsComponent},
  {path:'rejectedRequests',component:RejectedRequestsComponent},

  {path:'budget',
         children:[
          {path:'',component:BudgetComponent},
          {path:'',
                children:[
                  {path:'approvedRequests',component:ApprovedRequestsComponent},
                  {path:'rejectedRequests',component:RejectedRequestsComponent},
                  {path:'pendingRequests',component:PendingRequestsComponent},
                  {path:'completedRequests',component:CompletedRequestsComponent}
          ]},
         ]},

  {path:'Request',
         children:[
           {path:'',component:BudgetRequestsComponent},
           {path:'',
                  children:[
                  {path:'approvedReqByM',component:ApprovedComponent},
                  {path:'rejectedReqByM',component:RejectedComponent},
                  {path:'pendingReqByM',component:PendingComponent},
                  {path:'completedReqByM',component:CompletedComponent}
                  ]
          }
         ]
     },

  // {path:'viewRequests',component:ViewRequestsComponent},
 
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
