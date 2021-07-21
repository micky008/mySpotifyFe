import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponantComponent } from './footer-componant.component';

describe('FooterComponantComponent', () => {
  let component: FooterComponantComponent;
  let fixture: ComponentFixture<FooterComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
