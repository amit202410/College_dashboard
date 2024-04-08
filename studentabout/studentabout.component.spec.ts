import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaboutComponent } from './studentabout.component';

describe('StudentaboutComponent', () => {
  let component: StudentaboutComponent;
  let fixture: ComponentFixture<StudentaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentaboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
