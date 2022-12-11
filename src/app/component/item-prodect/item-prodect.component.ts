import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/items';

@Component({
  selector: 'app-item-prodect',
  templateUrl: './item-prodect.component.html',
  styleUrls: ['./item-prodect.component.scss']
})
export class ItemProdectComponent {
  @Input() product! : Product ;
  @Output() share : EventEmitter<Product> = new EventEmitter();

  onShare() {
     this.share.emit();
  }
}
