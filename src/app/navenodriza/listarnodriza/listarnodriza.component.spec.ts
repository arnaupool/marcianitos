import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarnodrizaComponent } from './listarnodriza.component';

describe('ListarnodrizaComponent', () => {
  let component: ListarnodrizaComponent;
  let fixture: ComponentFixture<ListarnodrizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarnodrizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarnodrizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
