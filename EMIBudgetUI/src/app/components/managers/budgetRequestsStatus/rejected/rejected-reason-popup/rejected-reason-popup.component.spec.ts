import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedReasonPopupComponent } from './rejected-reason-popup.component';

describe('RejectedReasonPopupComponent', () => {
  let component: RejectedReasonPopupComponent;
  let fixture: ComponentFixture<RejectedReasonPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedReasonPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedReasonPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
