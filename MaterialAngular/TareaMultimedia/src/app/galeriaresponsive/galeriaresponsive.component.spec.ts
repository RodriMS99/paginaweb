import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaresponsiveComponent } from './galeriaresponsive.component';

describe('GaleriaresponsiveComponent', () => {
  let component: GaleriaresponsiveComponent;
  let fixture: ComponentFixture<GaleriaresponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaresponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaresponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
