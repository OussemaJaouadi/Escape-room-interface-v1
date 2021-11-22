import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamstimeComponent } from './teamstime.component';

describe('TeamstimeComponent', () => {
  let component: TeamstimeComponent;
  let fixture: ComponentFixture<TeamstimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamstimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamstimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
