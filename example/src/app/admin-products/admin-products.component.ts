import { Component } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent {
  products;
  model: ProductRepository;
  selectedProduct: Product;
  constructor() {
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
    console.log(this.products);
  }

  getSelected(product: Product): boolean {
    return product.name == this.selectedProduct;
  }

  // handleInput(event) {
  //   this.selectedProduct = event.target.value;
  // }

  editProduct(product: Product) {
    this.selectedProduct = product;
  }
  keyupName(pName) {
    this.selectedProduct = pName.value;
  }
  keyupPrice(pPrice) {
    this.selectedProduct = pPrice.value;
  }
  keyupImageUrl(pImageUrl) {
    this.selectedProduct = pImageUrl.value;
  }
  keyupDescription(pDescription) {
    this.selectedProduct = pDescription.value;
  }
}
