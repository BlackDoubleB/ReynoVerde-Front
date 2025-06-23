import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsuarioComponent } from './registro-usuario.component';

describe('RegistroUsuarioComponent', () => {
  let component: RegistroUsuarioComponent;
  let fixture: ComponentFixture<RegistroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
