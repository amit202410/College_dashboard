import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentportalComponent } from './studentportal.component';

describe('StudentportalComponent', () => {
  let component: StudentportalComponent;
  let fixture: ComponentFixture<StudentportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentportalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
