import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './component/body/body.component';
import { CartComponent } from './component/cart/cart.component';
import { DetailsComponent } from './component/details/details.component';

const routes: Routes = [
  {
    path: '', component: BodyComponent
  },
  {
    path: 'products/:id', component: DetailsComponent
  },
  {
    path: 'cart', component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
