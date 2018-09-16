import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationCardComponent } from './formation-card.component';

describe('FormationCardComponent', () => {
  let component: FormationCardComponent;
  let fixture: ComponentFixture<FormationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
