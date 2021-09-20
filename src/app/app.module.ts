import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { PriceDisplayComponent } from './product-row/product-details/price-display/price-display.component';
import { ProductDepartementComponent } from './product-row/product-details/product-departement/product-departement.component';
import { ProductImageComponent } from './product-row/product-details/product-image/product-image.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductRowComponent,
    PriceDisplayComponent,
    ProductDepartementComponent,
    ProductImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
