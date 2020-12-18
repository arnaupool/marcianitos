import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarrevisionComponent } from './listarrevision.component';

describe('ListarrevisionComponent', () => {
  let component: ListarrevisionComponent;
  let fixture: ComponentFixture<ListarrevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarrevisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarrevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
