import { Component } from '@angular/core';
import { Product } from 'src/app/items';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  items : Product[] = [] ;
  itemsNumber : number =this.cartService.getItems().length; ;
  constructor(private cartService : CartService){}

}
