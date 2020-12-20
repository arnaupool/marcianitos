import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearrevisionComponent } from './crearrevision.component';

describe('CrearrevisionComponent', () => {
  let component: CrearrevisionComponent;
  let fixture: ComponentFixture<CrearrevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearrevisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearrevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
