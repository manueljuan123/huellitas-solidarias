import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadelaComfenalcoComponent } from './ciudadela-comfenalco.component';

describe('CiudadelaComfenalcoComponent', () => {
  let component: CiudadelaComfenalcoComponent;
  let fixture: ComponentFixture<CiudadelaComfenalcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadelaComfenalcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiudadelaComfenalcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
