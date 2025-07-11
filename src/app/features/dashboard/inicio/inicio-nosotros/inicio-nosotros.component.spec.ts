import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioNosotrosComponent } from './inicio-nosotros.component';

describe('InicioNosotrosComponent', () => {
  let component: InicioNosotrosComponent;
  let fixture: ComponentFixture<InicioNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioNosotrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
