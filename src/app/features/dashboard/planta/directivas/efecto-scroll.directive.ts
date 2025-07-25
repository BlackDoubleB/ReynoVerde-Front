// import { Directive, ElementRef, HostListener, OnDestroy } from '@angular/core';

// @Directive({
//   selector: '[appEfectoScroll]',
// })
// export class EfectoScrollDirective implements OnDestroy {
//   private observer: IntersectionObserver;

//   constructor(private el: ElementRef) {
//     this.observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         entry.target.classList.toggle('mostrarScroll', entry.isIntersecting);
//         entry.target.classList.toggle('ocultarScroll', !entry.isIntersecting);
//       });
//     },  {threshold:0.1}

//   );

//     this.observer.observe(this.el.nativeElement);
//   }

//   ngOnDestroy(): void {
//     this.observer.disconnect();
//   }

// }
import { Directive, ElementRef, HostListener, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appEfectoScroll]',
})
export class EfectoScrollDirective implements OnDestroy {
  private observer: IntersectionObserver;
  private lastScrollTop = 0; // Para detectar dirección de scroll
  private scrollingDown = false;

  constructor(private el: ElementRef) {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
         
          if (this.scrollingDown) {
            entry.target.classList.add('mostrarScroll');
          } else{
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
    this.scrollingDown = currentScroll > this.lastScrollTop;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
