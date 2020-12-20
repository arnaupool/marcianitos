import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarmarcianosComponent } from './listarmarcianos.component';

describe('ListarmarcianosComponent', () => {
  let component: ListarmarcianosComponent;
  let fixture: ComponentFixture<ListarmarcianosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarmarcianosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarmarcianosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
