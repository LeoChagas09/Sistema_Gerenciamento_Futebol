import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCampeonatosComponent } from './criar-campeonatos.component';

describe('CriarCampeonatosComponent', () => {
  let component: CriarCampeonatosComponent;
  let fixture: ComponentFixture<CriarCampeonatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCampeonatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCampeonatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
