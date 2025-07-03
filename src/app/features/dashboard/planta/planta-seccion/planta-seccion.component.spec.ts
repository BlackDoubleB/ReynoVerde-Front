import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaSeccionComponent } from './planta-seccion.component';

describe('PlantaSeccionComponent', () => {
  let component: PlantaSeccionComponent;
  let fixture: ComponentFixture<PlantaSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantaSeccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantaSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
