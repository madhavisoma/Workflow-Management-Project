import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprojDialogComponent } from './newproj-dialog.component';

describe('NewprojDialogComponent', () => {
  let component: NewprojDialogComponent;
  let fixture: ComponentFixture<NewprojDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewprojDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprojDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
