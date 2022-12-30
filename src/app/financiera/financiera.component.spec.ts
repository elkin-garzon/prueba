import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancieraComponent } from './financiera.component';

describe('FinancieraComponent', () => {
  let component: FinancieraComponent;
  let fixture: ComponentFixture<FinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancieraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
