import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltoDeLaTazaComponent } from './alto-de-la-taza.component';

describe('AltoDeLaTazaComponent', () => {
  let component: AltoDeLaTazaComponent;
  let fixture: ComponentFixture<AltoDeLaTazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltoDeLaTazaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltoDeLaTazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
