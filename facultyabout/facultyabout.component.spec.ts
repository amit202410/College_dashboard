import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyaboutComponent } from './facultyabout.component';

describe('FacultyaboutComponent', () => {
  let component: FacultyaboutComponent;
  let fixture: ComponentFixture<FacultyaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacultyaboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
