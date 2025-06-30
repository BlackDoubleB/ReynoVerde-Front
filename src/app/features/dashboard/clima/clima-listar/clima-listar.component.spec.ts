import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaListarComponent } from './clima-listar.component';

describe('ClimaListarComponent', () => {
  let component: ClimaListarComponent;
  let fixture: ComponentFixture<ClimaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClimaListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
