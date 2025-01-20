import { Component } from '@angular/core';

@Component({
  selector: 'app-product-section',
  imports: [],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss'
})
export class ProductSectionComponent {
public classOpenCapital: string = 'product__item';
public classOpenBusinnessCard: string = 'product__item--open';

toggleproductCapital(visible: boolean) {
    this.classOpenCapital = visible ? 'product__item' : 'product__item--open';
  this.classOpenBusinnessCard = visible ? ' product__item--open' : 'product__item';
  }

  toggleproductBusinnessCard(visible: boolean) {
    this.classOpenBusinnessCard = visible ? 'product__item' : 'product__item--open';
    this.classOpenCapital = visible ? ' product__item--open' : 'product__item';
  } 
}
