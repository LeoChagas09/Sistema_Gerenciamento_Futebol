import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCampeonatosComponent } from './editar-campeonatos.component';

describe('EditarCampeonatosComponent', () => {
  let component: EditarCampeonatosComponent;
  let fixture: ComponentFixture<EditarCampeonatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCampeonatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCampeonatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
