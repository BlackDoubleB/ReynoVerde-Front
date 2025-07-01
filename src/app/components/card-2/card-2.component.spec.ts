import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card2Component } from './card-2.component';

describe('Card2Component', () => {
  let component: Card2Component;
  let fixture: ComponentFixture<Card2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
