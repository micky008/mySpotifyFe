import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterComponantComponent } from './center-componant.component';

describe('CenterComponantComponent', () => {
  let component: CenterComponantComponent;
  let fixture: ComponentFixture<CenterComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterComponantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
