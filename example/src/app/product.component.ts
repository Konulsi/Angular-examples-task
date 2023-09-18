import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: 'app',
  templateUrl: 'product.component.html',
  // template: `<input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />`,
  styleUrls: ['product.component.css'],
})
export class ProductComponent {
  // custom pipes
  // text ='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, at.';

  model: ProductRepository = new ProductRepository();

  addProduct() {
    this.model.addProduct(
      new Product(6, 'Samsung S10', 'iyi telefon', '1.jpg', 5000)
    );
  }

  deleteProduct(product: Product) {
    this.model.deleteProduct(product);
  }

  updateProduct(product: Product){
    product.name = "updated";
  }

  // productName: string = this.model.getProductById(1).name;

  // email = 'konulsi@code.edu.az';

  // today: number = Date.now();
  // title: string = 'Angular kursu';
  // students: number = 21536;
  // price: number = 395.9756;
  // completed: number = 0.26;

  // onKeyUp(){
  //    console.log(this.email);
  // }

  // disabled = true;
  // getClasses(id: number): string {
  //   let product = this.model.getProductById(id);
  //   return (
  //     (product.price <= 1000 ? 'bg-info' : 'bg-secondary') +
  //     ' m-2 p-2 text-white'
  //   );
  // }

  // getClassMap(id: number): Object {
  //   let product = this.model.getProductById(id);
  //   return {
  //     'bg-info': product.price <= 1000,
  //     'bg-secondary': product.price > 1000,
  //     'text-center text-white': product.name == 'Samsung S6',
  //   };
  // }

  // color: string = this.model.getProductById(1).price <= 1000 ? 'green' : 'red';
  // fontSize: string = '25px';

  // getStyles(id: number): Object {
  //   let product = this.model.getProductById(id);
  //   return {
  //     fontSize: '25px',
  //     color: product.price <= 1000 ? 'green' : 'red',
  //   };
  // }

  // onSubmit($event) {
  //   $event.stopPropagation(); //boublink olayinin qarshisini almaq uchun. yeni buttona click etdinde yalniz ona aid olsun icherisinde oldugu divi tetiklemesin
  //   console.log('button was clicked');
  //   console.log($event);
  // }

  // onDivClicked() {
  //   console.log('Div was clicked');
  // }

  // onKeyUp(email){
  //    console.log(email);
  // }
}
