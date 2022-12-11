import { Component } from '@angular/core';
import { Product, products } from 'src/app/items';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  title: string = "";
  items = products;

  share(product : Product): void {
    window.alert('The product '+product.name+' has been shared!');
  }
}
