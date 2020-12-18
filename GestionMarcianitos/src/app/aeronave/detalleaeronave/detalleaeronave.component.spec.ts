import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleaeronaveComponent } from './detalleaeronave.component';

describe('DetalleaeronaveComponent', () => {
  let component: DetalleaeronaveComponent;
  let fixture: ComponentFixture<DetalleaeronaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleaeronaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleaeronaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
