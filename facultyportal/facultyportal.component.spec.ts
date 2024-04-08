import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyportalComponent } from './facultyportal.component';

describe('FacultyportalComponent', () => {
  let component: FacultyportalComponent;
  let fixture: ComponentFixture<FacultyportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacultyportalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
