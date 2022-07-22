import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaSoledadComponent } from './la-soledad.component';

describe('LaSoledadComponent', () => {
  let component: LaSoledadComponent;
  let fixture: ComponentFixture<LaSoledadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaSoledadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaSoledadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
