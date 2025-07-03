import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaListarComponent } from './categoria-listar.component';

describe('CategoriaListarComponent', () => {
  let component: CategoriaListarComponent;
  let fixture: ComponentFixture<CategoriaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
