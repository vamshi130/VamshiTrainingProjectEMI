import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { budgetModel } from 'src/app/models/budget.model';
import { UserBudgetRequestManageService } from 'src/app/services/user-budget-request-manage.service';

import { PendingRequestsComponent } from './pending-requests.component';

fdescribe('PendingRequestsComponent', () => {
  let component: PendingRequestsComponent;
  let fixture: ComponentFixture<PendingRequestsComponent>;
  let el:DebugElement
  let pendingRequestsService:any;
  beforeEach(async () => {
    // const matDialogService=jasmine.createSpyObj<MatDialog>('MatDialog',['open'])
    const pendingRequestsSpy=jasmine.createSpyObj('UserBudgetRequestManageService',['getInitiatedBudgetRequests'])
    await TestBed.configureTestingModule({
      imports:[AppModule,NoopAnimationsModule],
      declarations: [ PendingRequestsComponent ],
      providers:[{provide:UserBudgetRequestManageService,useValue:pendingRequestsSpy}]
      // providers:[{provide:UserBudgetRequestManageService,useValue:pendingRequestsSpy},{provide:MatDialog,useValue:matDialogService}]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingRequestsComponent);
    component = fixture.componentInstance;
    el=fixture.debugElement;
    pendingRequestsService=TestBed.inject(UserBudgetRequestManageService)
    // fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check the dom elements',()=>{
    pendingRequestsService.getInitiatedBudgetRequests.and.returnValue(of(budgetRequests));
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.initiatedRequests).toEqual(budgetRequests);
    const tabs=el.queryAll(By.css('.mat-card'));
    console.log("tabs of pending",tabs)
    expect(tabs.length).toBe(3);
  })
  
});


const budgetRequests :budgetModel[]=[
  {
    "id": 2,
    "purpose": "Lunch",
    "description": "Lunch at Barbique",
    "costEstimated": 10000,
    "advanceAmmount": 5000,
    "date":new Date('2022-05-22T00:00:00'),
    "status": "Approved",
    "userId": 5,
    "managerId": 3,
    "createdOn": "2022-05-22T00:00:00",
    "reportingTo": "Dinesh"
  },
  {
    "id": 10006,
    "purpose": "Visiting barbeque",
    "description": "skskskk",
    "costEstimated": 20000,
    "advanceAmmount": 2222,
    "date": new Date('2022-05-22T00:00:00'),
    "status": "Pending",
    "userId": 5,
    "managerId": 3,
    "createdOn": "2022-05-22T00:00:00",
    "reportingTo": "Dinesh"
  },
  {
    "id": 10008,
    "purpose": "Going to Himalayas",
    "description": "Going to himalayas with friends",
    "costEstimated": 30000,
    "advanceAmmount": 15000,
    "date":new Date('2022-05-22T00:00:00'),
    "status": "Approved",
    "userId": 5,
    "managerId": 3,
    "createdOn": "2022-05-05T00:00:00",
    "reportingTo": "Dinesh"
  }]