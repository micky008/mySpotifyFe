import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightComponantComponent } from './right-componant.component';

describe('RightComponantComponent', () => {
  let component: RightComponantComponent;
  let fixture: ComponentFixture<RightComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightComponantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
