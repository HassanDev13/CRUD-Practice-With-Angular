import { Component } from '@angular/core';
import { Product } from 'src/app/items';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items : Product[] = this.cartService.getItems() ;
 
  itemsNumber : number = this.items.length ;
  constructor(private cartService : CartService){}


  
}
