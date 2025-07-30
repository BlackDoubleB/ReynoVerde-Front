import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverDetect]',
})
export class HoverDetectDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    const parent = this.el.nativeElement.parentElement;
    const detalles = parent.querySelector('.detalles');
    if (detalles) {
      this.renderer.setStyle(detalles, 'transform', 'scale(1.1)');
      this.renderer.setStyle(detalles, 'transition', 'transform 0.3s ease');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    const parent = this.el.nativeElement.parentElement;
    const detalles = parent.querySelector('.detalles');
    if (detalles) {
      this.renderer.setStyle(detalles, 'transform', 'scale(1)');
    }
  }
}
