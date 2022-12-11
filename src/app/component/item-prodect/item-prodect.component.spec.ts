import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProdectComponent } from './item-prodect.component';

describe('ItemProdectComponent', () => {
  let component: ItemProdectComponent;
  let fixture: ComponentFixture<ItemProdectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemProdectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemProdectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
