import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleEmployeesListComponent } from './google-employees-list.component';

describe('GoogleEmployeesListComponent', () => {
  let component: GoogleEmployeesListComponent;
  let fixture: ComponentFixture<GoogleEmployeesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleEmployeesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleEmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
