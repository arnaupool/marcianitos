import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarhistorialComponent } from './listarhistorial.component';

describe('ListarhistorialComponent', () => {
  let component: ListarhistorialComponent;
  let fixture: ComponentFixture<ListarhistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarhistorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarhistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
