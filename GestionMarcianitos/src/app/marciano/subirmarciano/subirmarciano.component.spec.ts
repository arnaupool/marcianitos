import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirmarcianoComponent } from './subirmarciano.component';

describe('SubirmarcianoComponent', () => {
  let component: SubirmarcianoComponent;
  let fixture: ComponentFixture<SubirmarcianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirmarcianoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirmarcianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
