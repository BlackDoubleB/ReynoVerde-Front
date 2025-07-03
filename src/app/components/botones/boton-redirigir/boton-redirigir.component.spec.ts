import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRedirigirComponent } from './boton-redirigir.component';

describe('BotonRedirigirComponent', () => {
  let component: BotonRedirigirComponent;
  let fixture: ComponentFixture<BotonRedirigirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonRedirigirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonRedirigirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
