import { Directive, ElementRef, HostListener, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appEfectoScroll]',
})
export class EfectoScrollDirective implements OnDestroy {
  private observer: IntersectionObserver;
  private lastScrollTop = 0; // Para detectar dirección de scroll
  private scrollingDown = false;
  private resizeObserver: ResizeObserver;

  constructor(private el: ElementRef) {
    this.resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const alto = entry.contentRect.height;
        console.log('Nuevo alto:', alto);
      }
    });

    this.resizeObserver.observe(this.el.nativeElement);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (this.scrollingDown) {
            entry.target.classList.add('mostrarScroll');
          } else {
            entry.target.classList.remove('mostrarScroll');
          }
        });
      },
      {
        rootMargin: '0px 0px 100px 0px',
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    console.log('currentScroll', currentScroll);
    this.scrollingDown = currentScroll > this.lastScrollTop; //Siempre compara el valor actual contra el anterior,En JavaScript (y TypeScript), las líneas de código se ejecutan en orden, una por una.
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
