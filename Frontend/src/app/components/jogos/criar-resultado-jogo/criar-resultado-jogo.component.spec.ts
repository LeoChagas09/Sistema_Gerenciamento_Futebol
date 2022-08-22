import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarResultadoJogoComponent } from './criar-resultado-jogo.component';

describe('CriarResultadoJogoComponent', () => {
  let component: CriarResultadoJogoComponent;
  let fixture: ComponentFixture<CriarResultadoJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarResultadoJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarResultadoJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
