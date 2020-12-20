import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarpasajerosComponent } from './asignarpasajeros.component';

describe('AsignarpasajerosComponent', () => {
  let component: AsignarpasajerosComponent;
  let fixture: ComponentFixture<AsignarpasajerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarpasajerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarpasajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
