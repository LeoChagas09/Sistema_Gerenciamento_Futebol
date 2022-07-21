import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTimesComponent } from './listar-times.component';

describe('ListarTimesComponent', () => {
  let component: ListarTimesComponent;
  let fixture: ComponentFixture<ListarTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
