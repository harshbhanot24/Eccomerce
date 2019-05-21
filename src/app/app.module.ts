import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from './material/material.module'
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'checkout',      component: CheckoutComponent },
  {
    path: '',
    component: ItemlistComponent,
    data: { title: 'Heroes List' }
  }
];
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ItemComponent,
    ItemlistComponent,
    CheckoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,MaterialModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
