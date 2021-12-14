import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleComponent } from './trouble.component';

describe('TroubleComponent', () => {
  let component: TroubleComponent;
  let fixture: ComponentFixture<TroubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
