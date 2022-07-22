import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitContainerComponent } from './init-container.component';

describe('InitContainerComponent', () => {
  let component: InitContainerComponent;
  let fixture: ComponentFixture<InitContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
