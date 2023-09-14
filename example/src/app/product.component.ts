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
  model: ProductRepository = new ProductRepository();

  email = 'konulsi@code.edu.az';

  onKeyUp(){
     console.log(this.email);
  }

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
