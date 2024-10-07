import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitymasterComponent } from './activitymaster.component';

describe('ActivitymasterComponent', () => {
  let component: ActivitymasterComponent;
  let fixture: ComponentFixture<ActivitymasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitymasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
