import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ // yaratdigimiz componentleri yaziriq
  ProductComponent
],
  imports: [ //angulardan gelen modullar burada yazilir
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent] // modulun bashlangic komponenti appComponent i burada qeyd edirik.
})
export class AppModule { }
