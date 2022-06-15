import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserBudgetRequestManageService } from './user-budget-request-manage.service';

describe('UserBudgetRequestManageService', () => {
  let service: UserBudgetRequestManageService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserBudgetRequestManageService]
    });
    service = TestBed.inject(UserBudgetRequestManageService);
    httpTestingController = TestBed.inject(HttpTestingController)

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
