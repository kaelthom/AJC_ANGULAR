import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './productList/product/product.component';
import { CounterIncrementorComponent } from './counter-incrementor/counter-incrementor.component';
import { CounterComponent } from './counter/counter.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { VerifyAccountNumberPipe } from './verify-account-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductComponent,
    CounterIncrementorComponent,
    CounterComponent,
    SupplierListComponent,
    VerifyAccountNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
