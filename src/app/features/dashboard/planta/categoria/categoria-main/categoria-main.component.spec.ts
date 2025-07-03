import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaMainComponent } from './categoria-main.component';

describe('CategoriaMainComponent', () => {
  let component: CategoriaMainComponent;
  let fixture: ComponentFixture<CategoriaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
