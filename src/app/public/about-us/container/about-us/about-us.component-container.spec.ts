import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsComponentContainer } from './about-us-container.component';

describe('AboutUsComponentContainer', () => {
  let component: AboutUsComponentContainer;
  let fixture: ComponentFixture<AboutUsComponentContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsComponentContainer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsComponentContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
