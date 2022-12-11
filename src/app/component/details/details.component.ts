import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from 'src/app/items';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent  {
  constructor(private route: ActivatedRoute , private cardService : CartService){}
  prodectId : Number = 0 ; 
  product : Product | undefined ; 
  ngOnInit(){
    const routePrams = this.route.snapshot.paramMap; 
    this.prodectId = Number(routePrams.get('id'));
    this.product = this.findOneProduct();
    
  }

  findOneProduct():Product | undefined {
    return products.find(product => product.id === this.prodectId);
  }

  addToCart(product : Product){
    this.cardService.addToCard(product);
    window.alert("prodect add to cart");
  }
}
