import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearaeronaveComponent } from './crearaeronave.component';

describe('CrearaeronaveComponent', () => {
  let component: CrearaeronaveComponent;
  let fixture: ComponentFixture<CrearaeronaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearaeronaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearaeronaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
