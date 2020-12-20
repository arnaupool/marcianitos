import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaerrorComponent } from './ventanaerror.component';

describe('VentanaerrorComponent', () => {
  let component: VentanaerrorComponent;
  let fixture: ComponentFixture<VentanaerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaerrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
