import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KioskoProductsComponent } from './kiosko-products.component';

describe('KioskoProductsComponent', () => {
  let component: KioskoProductsComponent;
  let fixture: ComponentFixture<KioskoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KioskoProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
