import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ImageValidators } from './image.validators';

@Component({
  selector: 'app',
  templateUrl: 'product.component.html',
  // template: `<input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />`,
  styleUrls: ['product.component.css'],
})
export class ProductComponent {
  //reactive form

  productForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [
      Validators.required,
      ImageValidators.isValidExtension,
    ]),
  });

  get name() {
    return this.productForm.get('name');
  }

  get imageUrl() {
    return this.productForm.get('imageUrl');
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

  updateProduct() {
    this.productForm.patchValue({
      name: 'Iphone X',
      price: '5000',
    });
  }

  // custom pipes
  // text ='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, at.';
  // model: ProductRepository = new ProductRepository();
  // form
  // newProduct: Product = new Product();
  // get jsonProduct() {
  //   // get ozelliyi product objectini json formatina cheviren get propertysidir
  //   return JSON.stringify(this.newProduct);
  // }
  // addProduct(p: Product) {
  //   console.log('new Product: ' + this.jsonProduct);
  // }
  // formSubmitted: boolean = false;
  // submitForm(form: NgForm) {
  //   console.log(form);
  //   this.formSubmitted = true;
  //   if (form.valid) {
  //     this.addProduct(this.newProduct);
  //     this.newProduct = new Product(); //yeniden referance aldiqda newProduct in icherisi girilen datalardan temizlenir ve novbeti girish uchun hazir hala geler
  //     form.reset(); // istifadechinin formu submit etdiyi form bilgileri resetlenir.yeni form reseltlenib ilk halina gelir yeni formun pristin ozelliyi trure eshitlenir yeni form icherisinden data girilmemish olur
  //     this.formSubmitted = false;
  //   }
  // }
  // getFormValidationErrors(form: NgForm): string[] {
  //   let messages: string[] = [];
  //   Object.keys(form.controls).forEach((k) => {
  //     console.log(k); //name alani uhcun name
  //     console.log(form.controls[k]); //FormControl (name alani uchun yaradilan formcontrol)
  //     this.getValidationErrors(form.controls[k], k).forEach((message) =>
  //       messages.push(message)
  //     );
  //   });
  //   return messages;
  // }
  // getValidationErrors(state: any, key?: string) {
  //   let ctrlName: string = state.name || key;
  //   let messages: string[] = [];
  //   if (state.errors) {
  //     //state -in errorlari dolu ise yeni error varsa
  //     for (let errorName in state.errors) {
  //       switch (errorName) {
  //         case 'required':
  //           messages.push(`You must enter a ${ctrlName}`);
  //           break;
  //         case 'minlength':
  //           messages.push(`Min. 3 character for ${ctrlName}`);
  //           break;
  //         case 'pattern':
  //           messages.push(`${ctrlName} contains illegal characters`);
  //           break;
  //       }
  //     }
  //   }
  //   return messages;
  // }
  // addProduct() {
  //   this.model.addProduct(
  //     new Product(6, 'Samsung S10', 'iyi telefon', '1.jpg', 5000)
  //   );
  // }
  // deleteProduct(product: Product) {
  //   this.model.deleteProduct(product);
  // }
  // updateProduct(product: Product){
  //   product.name = "updated";
  // }
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
