import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaComponent } from './portada.component';

describe('PortadaComponent', () => {
  let component: PortadaComponent;
  let fixture: ComponentFixture<PortadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
