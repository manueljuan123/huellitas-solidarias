import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaEsperanzaComponent } from './la-esperanza.component';

describe('LaEsperanzaComponent', () => {
  let component: LaEsperanzaComponent;
  let fixture: ComponentFixture<LaEsperanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaEsperanzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaEsperanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
