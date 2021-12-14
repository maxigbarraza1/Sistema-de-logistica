import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarViajeComponent } from './solicitar-viaje.component';

describe('SolicitarViajeComponent', () => {
  let component: SolicitarViajeComponent;
  let fixture: ComponentFixture<SolicitarViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarViajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
