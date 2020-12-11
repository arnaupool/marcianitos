import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajarmarcianoComponent } from './bajarmarciano.component';

describe('BajarmarcianoComponent', () => {
  let component: BajarmarcianoComponent;
  let fixture: ComponentFixture<BajarmarcianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajarmarcianoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajarmarcianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
