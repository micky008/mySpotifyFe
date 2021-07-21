import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftComponantComponent } from './left-componant.component';

describe('LeftComponantComponent', () => {
  let component: LeftComponantComponent;
  let fixture: ComponentFixture<LeftComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftComponantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
