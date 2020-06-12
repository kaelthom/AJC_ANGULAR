import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  eventEmitter: EventEmitter<Product> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('click') callParent() {
    this.eventEmitter.emit(this.product);
  }
}
