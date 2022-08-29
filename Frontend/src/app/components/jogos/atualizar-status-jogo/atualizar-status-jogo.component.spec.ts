import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarStatusJogoComponent } from './atualizar-status-jogo.component';

describe('AtualizarStatusJogoComponent', () => {
  let component: AtualizarStatusJogoComponent;
  let fixture: ComponentFixture<AtualizarStatusJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarStatusJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarStatusJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
