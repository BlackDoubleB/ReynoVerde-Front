import { Directive, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appEfectoScroll]',
})
export class EfectoScrollDirective implements OnDestroy {

   private observer: IntersectionObserver;

  constructor(private el: ElementRef) {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('mostrarScroll', entry.isIntersecting);
        entry.target.classList.toggle('ocultarScroll', !entry.isIntersecting);
      });
    });
    
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

}
