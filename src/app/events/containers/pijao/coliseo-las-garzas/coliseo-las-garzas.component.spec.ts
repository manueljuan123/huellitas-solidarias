import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColiseoLasGarzasComponent } from './coliseo-las-garzas.component';

describe('ColiseoLasGarzasComponent', () => {
  let component: ColiseoLasGarzasComponent;
  let fixture: ComponentFixture<ColiseoLasGarzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColiseoLasGarzasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColiseoLasGarzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
