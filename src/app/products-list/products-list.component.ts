import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() listeProduit : Product[];
  @Output() onProductSelected : EventEmitter<Product> ;  
 private currentProduct: Product  = new Product('','','',[],0);

  constructor() {
    this.listeProduit = [new Product('test nom',' test sku','/assets/images/products/image-test.jpg',['test1','test2'],0)];
    this.onProductSelected = new EventEmitter();
  }
  
  clicked(produit: Product): void {
    this.currentProduct = produit;
    this.onProductSelected.emit(produit);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
    

  ngOnInit(): void {
  }

}
