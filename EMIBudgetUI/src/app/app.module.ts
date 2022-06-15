import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { BudgetComponent } from './components/employee/budget/budget.component';
import { NavbarComponent } from './sharedModules/components/navbar/navbar.component';
import { MaterialModule } from './sharedModules/materialModules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BudgetRequestsComponent } from './components/managers/budget-requests/budget-requests.component';
// import { ViewRequestsComponent } from './components/employee/view-requests/view-requests.component';
import { ApprovedRequestsComponent } from './components/employee/budget/budgetRequestsManage/approved-requests/approved-requests.component';
import { RejectedRequestsComponent } from './components/employee/budget/budgetRequestsManage/rejected-requests/rejected-requests.component';
import { PendingRequestsComponent } from './components/employee/budget/budgetRequestsManage/pending-requests/pending-requests.component';
import { CompletedRequestsComponent } from './components/employee/budget/budgetRequestsManage/completed-requests/completed-requests.component';
import { EditRequestComponent } from './components/employee/budget/budgetRequestsManage/pending-requests/edit-request/edit-request.component';
import { PendingComponent } from './components/managers/budgetRequestsStatus/pending/pending.component';
import { ApprovedComponent } from './components/managers/budgetRequestsStatus/approved/approved.component';
import { RejectedComponent } from './components/managers/budgetRequestsStatus/rejected/rejected.component';
import { CompletedComponent } from './components/managers/budgetRequestsStatus/completed/completed.component';
import { RejectedReasonPopupComponent } from './components/managers/budgetRequestsStatus/rejected/rejected-reason-popup/rejected-reason-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BudgetComponent,
    NavbarComponent,
    BudgetRequestsComponent,
    // ViewRequestsComponent,
    ApprovedRequestsComponent,
    RejectedRequestsComponent,
    PendingRequestsComponent,
    CompletedRequestsComponent,
    EditRequestComponent,
    PendingComponent,
    ApprovedComponent,
    RejectedComponent,
    CompletedComponent,
    RejectedReasonPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
