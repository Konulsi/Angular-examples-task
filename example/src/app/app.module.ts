import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { InputEmailDirective } from './input-email.directive';
import { AdminProductsComponent } from './admin-products/admin-products.component';


@NgModule({
  declarations: [ // yaratdigimiz componentleri yaziriq
  ProductComponent,
  SummaryPipe,
  InputEmailDirective,
  AdminProductsComponent
],
  imports: [ //angulardan gelen modullar burada yazilir
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent] // modulun bashlangic komponenti appComponent i burada qeyd edirik.
})
export class AppModule { }
