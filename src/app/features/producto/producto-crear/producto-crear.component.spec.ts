import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCrearComponent } from './producto-crear.component';

describe('ProductoCrearComponent', () => {
  let component: ProductoCrearComponent;
  let fixture: ComponentFixture<ProductoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
