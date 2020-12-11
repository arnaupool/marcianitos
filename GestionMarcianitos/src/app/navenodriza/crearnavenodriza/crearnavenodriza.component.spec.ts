import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearnavenodrizaComponent } from './crearnavenodriza.component';

describe('CrearnavenodrizaComponent', () => {
  let component: CrearnavenodrizaComponent;
  let fixture: ComponentFixture<CrearnavenodrizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearnavenodrizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearnavenodrizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
