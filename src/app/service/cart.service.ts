import { Injectable } from '@angular/core';
import { Product } from '../items';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : Product[] = [] ;
  constructor() { }

  addToCard(prodect : Product){
    this.items.push(prodect);
  }

  getItems(): Product[] {
    return this.items ;
  }

  clearItems() : Product [] {
    this.items = [];
    return this.items
  }

}
