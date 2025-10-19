import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEfectoDeslizamiento]'
})
export class EfectoDeslizamientoDirective {

  private observer!: IntersectionObserver;
  private lastScrollTop = 0;
  private scrollingDown = false;
  private resizeObserver: ResizeObserver;
  private alto = 0;

  constructor(private el: ElementRef) {
    this.resizeObserver = new ResizeObserver((entries) => {

      for (let entry of entries) {
        this.alto = entry.contentRect.height;
        this.activarConScroll();
      }
    });

    this.resizeObserver.observe(this.el.nativeElement);
    this.activarConScroll();
  }

  activarConScroll() {
    if (this.observer) {
      this.observer.disconnect();
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (this.scrollingDown ) {
            entry.target.classList.add('mostrarScroll');
          } else {
            entry.target.classList.remove('mostrarScroll');
          }
        });
      },

      {
        rootMargin: `0px 0px ${this.alto/16}px 0px`,
      }
      
    );

    this.observer.observe(this.el.nativeElement);
    
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    console.log('currentScroll', currentScroll);
    this.scrollingDown = currentScroll > this.lastScrollTop;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
      this.resizeObserver?.unobserve(this.el.nativeElement);
  }

}
