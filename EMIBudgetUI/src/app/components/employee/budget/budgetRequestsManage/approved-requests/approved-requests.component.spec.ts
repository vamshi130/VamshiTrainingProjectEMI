import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { budgetModel } from 'src/app/models/budget.model';
import { UserBudgetRequestManageService } from 'src/app/services/user-budget-request-manage.service';

import { ApprovedRequestsComponent } from './approved-requests.component';

fdescribe('ApprovedRequestsComponent', () => {
  let component: ApprovedRequestsComponent;
  let fixture: ComponentFixture<ApprovedRequestsComponent>;
  let el: DebugElement
  let requests:any;

  beforeEach(async () => {
    // const approvedrequestsSpy=jasmine.createSpyObj(' UserBudgetRequestManageService',['getApprovedBudgetRequests'])
    await TestBed.configureTestingModule({
      imports:[AppModule,NoopAnimationsModule,RouterTestingModule],
      // declarations: [ ApprovedRequestsComponent ],
      providers:[{provide:UserBudgetRequestManageService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedRequestsComponent);
    component = fixture.componentInstance;
    el=fixture.debugElement;
    requests=TestBed.inject(UserBudgetRequestManageService)
  });

  it('should load the component', () => {
    expect(component).toBeTruthy();
  });
  it('should render heading',()=>{
    const compiled=fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.content')?.textContent).toContain('Approved Requests');
  })
  it('should get the approved requests',()=>{
    const service=el.injector.get(UserBudgetRequestManageService);
      //  fixture.detectChanges();

    spyOn(service,'getApprovedBudgetRequests').and.returnValue(of(budgetRequests));

    component.ngOnInit();
    expect(component.requests).toBe(budgetRequests);
  })
  xit('sholud get dom elements tabs based on the data',()=>{
    const service=el.injector.get(UserBudgetRequestManageService);
    fixture.detectChanges();

    spyOn(service,'getApprovedBudgetRequests').and.returnValue(of(budgetRequests));
    component.ngOnInit();
    console.log("from dom",component.requests);
    const tabs=el.queryAll(By.css('.example-card'))
    console.log('tabs',tabs);
    expect(tabs.length).toBe(3)
  })
  xit('sholud get dom elements tabs based on the data',()=>{
    requests.getApprovedBudgetRequests.and.returnValue(of(budgetRequests));
    fixture.detectChanges();
    component.ngOnInit();
    const tabs=el.queryAll(By.css('.mat-card'));
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