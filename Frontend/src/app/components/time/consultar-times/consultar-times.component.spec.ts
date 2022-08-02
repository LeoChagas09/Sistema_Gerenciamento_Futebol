import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTimesComponent } from './consultar-times.component';

describe('ConsultarTimesComponent', () => {
  let component: ConsultarTimesComponent;
  let fixture: ComponentFixture<ConsultarTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
