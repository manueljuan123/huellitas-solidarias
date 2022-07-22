import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaLauraComponent } from './villa-laura.component';

describe('VillaLauraComponent', () => {
  let component: VillaLauraComponent;
  let fixture: ComponentFixture<VillaLauraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillaLauraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillaLauraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
