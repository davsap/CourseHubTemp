import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursFormComponent } from './coursform.component';

describe('CoursformComponent', () => {
  let component: CoursFormComponent;
  let fixture: ComponentFixture<CoursFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
