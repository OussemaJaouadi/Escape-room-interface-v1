import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodisfoodComponent } from './foodisfood.component';

describe('FoodisfoodComponent', () => {
  let component: FoodisfoodComponent;
  let fixture: ComponentFixture<FoodisfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodisfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodisfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
