import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyEduspark } from './why-eduspark';

describe('WhyEduspark', () => {
  let component: WhyEduspark;
  let fixture: ComponentFixture<WhyEduspark>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyEduspark],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyEduspark);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
