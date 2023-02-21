import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolatioComponent } from './holatio.component';

describe('HolatioComponent', () => {
  let component: HolatioComponent;
  let fixture: ComponentFixture<HolatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
