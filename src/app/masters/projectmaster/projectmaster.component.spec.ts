import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmasterComponent } from './projectmaster.component';

describe('ProjectmasterComponent', () => {
  let component: ProjectmasterComponent;
  let fixture: ComponentFixture<ProjectmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
