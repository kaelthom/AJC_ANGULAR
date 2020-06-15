import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {Product} from '../model/Product';

@Directive({
  selector: '[appShowPromo]'
})
export class ShowPromoDirective {

  @Input('product')
  product: Product;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.product.promo > 0 && this.product.promo < 5) {
      this.el.nativeElement.style.backgroundColor = 'blue';
    } else if (this.product.promo > 5) {
      this.el.nativeElement.style.backgroundColor = 'green';
    }

    if (this.product.promo !== 0) {
      this.el.nativeElement.insertAdjacentHTML('beforeend', '<div>' + this.product.price * (100 - this.product.promo) / 100 + '</div>');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }

}
