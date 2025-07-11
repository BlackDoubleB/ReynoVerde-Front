import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComentariosComponent } from './inicio-comentarios.component';

describe('InicioComentariosComponent', () => {
  let component: InicioComentariosComponent;
  let fixture: ComponentFixture<InicioComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioComentariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
