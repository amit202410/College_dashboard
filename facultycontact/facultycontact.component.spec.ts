import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultycontactComponent } from './facultycontact.component';

describe('FacultycontactComponent', () => {
  let component: FacultycontactComponent;
  let fixture: ComponentFixture<FacultycontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacultycontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultycontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
