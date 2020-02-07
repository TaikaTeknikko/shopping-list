import { Component, OnInit, ViewChild} from '@angular/core';
import { ItemsdbService } from '../itemsdb.service';
import { ShoppingItem } from 'src/shoppingitem';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  itemCount: number;
  items = Array<ShoppingItem>();
  newItem: string;
  newItemQuantity: number;
  @ViewChild('myInput', null) myInput;

  constructor(private itemsDB: ItemsdbService) { }

  ngOnInit() {
    // Get data asynchronously.
    this.itemsDB.getAll().then(data => {
      //Read data by converting to String and pasing JSON.
      this.items = JSON.parse(String(data));
      if (!this.items) {
        // If there's nothing in storage, create empty array and UI is updated correctly.
        this.items = [];
      }
      this.itemCount = this.items.length;
    }, err => {
      // Error is print out to console for debugging purposes. In real app you should
      // notify user that something has gone wrong.
      console.log(err);
    });
  }

  addItem(event) {
    if (event.keyCode === 13) {
      if (this.newItem !== "" && this.newItemQuantity !== 0) {
      const newShoppingItem: ShoppingItem = new ShoppingItem();
      newShoppingItem.name = this.newItem;
      newShoppingItem.quantity = this.newItemQuantity;
      this.items.push(newShoppingItem);
      this.newItem = "";
      this.newItemQuantity = null;
      this.myInput.setFocus();
      this.itemCount = this.items.length;
      this.itemsDB.save(this.items);
      }
      
    }
  }
  removeItem(index) {
    this.items.splice(index,1);
    this.itemsDB.save(this.items);
  }


}