import { TestBed } from '@angular/core/testing';

import { BudgetRequestStatusService } from './budget-request-status.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { budgetModel } from 'src/app/models/budget.model';


describe('BudgetRequestStatusService', () => {
  const requests:budgetModel[]=[]
  let service: BudgetRequestStatusService,
      httpTestingConttoller:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[BudgetRequestStatusService]
    });
    service = TestBed.inject(BudgetRequestStatusService);
    httpTestingConttoller=TestBed.inject(HttpTestingController);
  });
  xit('should retrieve the approved requests', () => {
    expect(service).toBeTruthy();
    let appId
    let request:any
    service.getApprovedBudgetRequests(appId).subscribe(requests=>{
      request=requests
      expect(requests).toBeTruthy();
      // expect(request[0].id).toBe(1)
      expect(request[0].status).toBe('Approved')
      expect(request[1].status).toBe('Pending')

    });
    const req=httpTestingConttoller.expectOne("https://localhost:44358/api/GetBudgetRequestsByStatusForManager/GetApprovedRequests/"+appId)
    expect(req.request.method).toEqual('GET');
    req.flush({budgetRequests});
  });

  xit('should retireve the rejected requests',()=>{
    expect(service).toBeTruthy();
    let rejId:number=5;
    let request:any
    service.getRejectedBudgetRequests(rejId).subscribe(requests=>{
      request=requests
      expect(requests).toBeTruthy();
      expect(request[0].status).toBe('Approved')
    });
    const req=httpTestingConttoller.expectOne("https://localhost:44358/api/GetBudgetRequestsByStatusForManager/GetRejectedRequests/"+rejId)
    expect(req.request.method).toEqual('GET');
    req.flush({budgetRequests})
  });

  it('should retrieve the pending requests',()=>{
    expect(service).toBeTruthy();
    let penID
    let Request:any
    service.getInitiatedBudgetRequests(penID).subscribe(requests=>{
      Request=requests;
      expect(requests).toBeTruthy();
    });
    const req=httpTestingConttoller.expectOne("https://localhost:44358/api/GetBudgetRequestsByStatusForManager/GetPendingRequests/"+penID)
    expect(req.request.method).toEqual('GET');
    req.flush({budgetRequests});
  });
  afterEach(()=>{
    httpTestingConttoller.verify();
});
  
});




const budgetRequests=[
  {
    "id": 2,
    "purpose": "Lunch",
    "description": "Lunch at Barbique",
    "costEstimated": 10000,
    "advanceAmmount": 5000,
    "date":2/2/222,
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
    "date": "2222-01-01T00:00:00",
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
    "date": "2022-05-04T00:00:00",
    "status": "Approved",
    "userId": 5,
    "managerId": 3,
    "createdOn": "2022-05-05T00:00:00",
    "reportingTo": "Dinesh"
  },
  {
    "id": 10009,
    "purpose": "Visiting TajMahal",
    "description": "Visting tajmahal with friends",
    "costEstimated": 10000,
    "advanceAmmount": 5000,
    "date": "2022-05-13T00:00:00",
    "status": "Approved",
    "userId": 5,
    "managerId": 3,
    "createdOn": "2022-05-05T00:00:00",
    "reportingTo": "Dinesh"
  },
  {
    "id": 10010,
    "purpose": "Visiting El dorado",
    "description": "Visiting EL dorado with friends to find gold",
    "costEstimated": 10000,
    "advanceAmmount": 5000,
    "date": "2022-05-13T00:00:00",
    "status": "Approved",
    "userId": 5,
    "managerId": 3,
    "createdOn": "2022-05-05T00:00:00",
    "reportingTo": "Dinesh"
  },
  {
    "id": 10011,
    "purpose": "Visiting Park",
    "description": "Visting park with friends",
    "costEstimated": 10000,
    "advanceAmmount": 5000,
    "date": "2022-05-19T00:00:00",
    "status": "Rejected",
    "userId": 5,
    "managerId": 3,
    "createdOn": "2022-05-05T00:00:00",
    "reportingTo": "Dinesh"
  }
]
