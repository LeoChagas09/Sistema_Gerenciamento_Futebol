import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarTimesComponent } from './criar-times.component';

describe('CriarTimesComponent', () => {
  let component: CriarTimesComponent;
  let fixture: ComponentFixture<CriarTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
