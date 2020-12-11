import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearmarcianoComponent } from './crearmarciano.component';

describe('CrearmarcianoComponent', () => {
  let component: CrearmarcianoComponent;
  let fixture: ComponentFixture<CrearmarcianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearmarcianoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearmarcianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
