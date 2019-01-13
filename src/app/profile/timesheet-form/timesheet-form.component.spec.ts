import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetFormComponent } from './timesheet-form.component';

describe('TimesheetFormComponent', () => {
  let component: TimesheetFormComponent;
  let fixture: ComponentFixture<TimesheetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
