import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ShoppingItem } from 'src/shoppingitem';

@Injectable({
  providedIn: 'root'
})
export class ItemsdbService {

  constructor(private storage: Storage) { }

  // Returns all items from local storage asynchronously.
  getAll() {
    return new Promise((resolve, reject) => {
      this.storage.get("items").then(data => {
        // Return data from storage.
        resolve(data);
      }, error => {
        //There is an error, call reject and pass error message.
        reject("Error retrieving data from storage");
      });
    });
  }

  // Save items to storage.
  save(items: Array<ShoppingItem>) {
    this.storage.set("items", JSON.stringify(items));
  }

}
