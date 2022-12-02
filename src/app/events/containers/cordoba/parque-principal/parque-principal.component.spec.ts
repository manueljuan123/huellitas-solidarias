import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParquePrincipalComponent } from './parque-principal.component';

describe('ParquePrincipalComponent', () => {
  let component: ParquePrincipalComponent;
  let fixture: ComponentFixture<ParquePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParquePrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParquePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
