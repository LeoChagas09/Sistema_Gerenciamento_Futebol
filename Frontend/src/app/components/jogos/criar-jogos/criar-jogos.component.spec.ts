import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarJogosComponent } from './criar-jogos.component';

describe('CriarJogosComponent', () => {
  let component: CriarJogosComponent;
  let fixture: ComponentFixture<CriarJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarJogosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
