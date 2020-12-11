import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaraeronaveComponent } from './listaraeronave.component';

describe('ListaraeronaveComponent', () => {
  let component: ListaraeronaveComponent;
  let fixture: ComponentFixture<ListaraeronaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaraeronaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaraeronaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
