import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCrearComponent } from './categoria-crear.component';

describe('CategoriaCrearComponent', () => {
  let component: CategoriaCrearComponent;
  let fixture: ComponentFixture<CategoriaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
