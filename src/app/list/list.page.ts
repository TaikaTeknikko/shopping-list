import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  itemCount: number;
  items = [];
  newItem: string;

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.itemCount = this.items.length;
  }

  addItem(event) {
    if (event.keyCode === 13) {
      this.items.push(this.newItem);
      this.newItem = "";
      this.itemCount = this.items.length;
    }
  } 

}