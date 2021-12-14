import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeEntregadoComponent } from './viaje-entregado.component';

describe('ViajeEntregadoComponent', () => {
  let component: ViajeEntregadoComponent;
  let fixture: ComponentFixture<ViajeEntregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajeEntregadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeEntregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
