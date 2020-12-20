import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajarpasajerosComponent } from './bajarpasajeros.component';

describe('BajarpasajerosComponent', () => {
  let component: BajarpasajerosComponent;
  let fixture: ComponentFixture<BajarpasajerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajarpasajerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajarpasajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
