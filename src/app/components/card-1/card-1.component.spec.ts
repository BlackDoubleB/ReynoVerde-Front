import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card1Component } from './card-1.component';

describe('Card1Component', () => {
  let component: Card1Component;
  let fixture: ComponentFixture<Card1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
