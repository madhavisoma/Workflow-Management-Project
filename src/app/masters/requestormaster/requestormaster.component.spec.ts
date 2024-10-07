import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestormasterComponent } from './requestormaster.component';

describe('RequestormasterComponent', () => {
  let component: RequestormasterComponent;
  let fixture: ComponentFixture<RequestormasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestormasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestormasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
