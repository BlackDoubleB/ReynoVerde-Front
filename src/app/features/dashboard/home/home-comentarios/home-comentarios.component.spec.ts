import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComentariosComponent } from './home-comentarios.component';

describe('HomeComentariosComponent', () => {
  let component: HomeComentariosComponent;
  let fixture: ComponentFixture<HomeComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComentariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
