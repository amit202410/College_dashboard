import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcontactComponent } from './studentcontact.component';

describe('StudentcontactComponent', () => {
  let component: StudentcontactComponent;
  let fixture: ComponentFixture<StudentcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentcontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
