import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { budgetModel } from '../models/budget.model';

import { BudgetApprovalService } from './budget-approval.service';

describe('BudgetApprovalService', () => {
  let service: BudgetApprovalService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BudgetApprovalService]
    });
    service = TestBed.inject(BudgetApprovalService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('Creating the edit request', () => {
    expect(service).toBeTruthy();
    service.editBudgetForm(budgetRequests).subscribe(request => {

      let reqst: any = request
      expect(request).toBeTruthy();
      expect(reqst[0].id).toBe(2);
    })
    const req = httpTestingController.expectOne("https://localhost:44358/api/BudgetRequests/PutBudgetRequests");
    expect(req.request.method).toEqual('PUT');
    req.flush({ budgetRequests })
  });

  it('Creating the Post Request', () => {
    expect(service).toBeTruthy();
    debugger;
    service.postBudgetForm(budgetRequests).subscribe(request => {
      let reqst = request
      debugger;

      expect(reqst).toBeTruthy();
    });
    const req = httpTestingController.expectOne("https://localhost:44358/api/BudgetRequests/PostBudgetRequests");
    expect(req.request.method).toEqual('POST');
    req.flush({ budgetRequests })
  })


  afterEach(() => {
    httpTestingController.verify();
  })


});

const budgetRequests = [
  {
    "id": 2,
    "purpose": "Lunch",
    "description": "Lunch at Barbique",
    "costEstimated": 10000,
    "advanceAmmount": 5000,
    "date": "2022-05-22T00:00:00",
    "status": "Approved",
    "userId": '5',
    "managerId": 3,
    "createdOn": "2022-05-22T00:00:00",
    "reportingTo": "Dinesh"
  }]