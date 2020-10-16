import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KioskoAboutComponent } from './kiosko-about.component';

describe('KioskoAboutComponent', () => {
  let component: KioskoAboutComponent;
  let fixture: ComponentFixture<KioskoAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KioskoAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
