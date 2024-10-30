import { makeAutoObservable } from "mobx";
import {IOrderItem} from "../@types/IOrderItem.ts";
import {ELocalStorageKeys} from "../@types/ELocalStorageKeys.ts";

class CartStore {
  public items: IOrderItem[] = [];

  constructor() {
    makeAutoObservable(this);
    this.items = JSON.parse(localStorage.getItem(ELocalStorageKeys.CART) || '[]');
  }

  public addItem(item: IOrderItem) {
    this.items.push(item);
    this.save();
  }

  public removeItem(index: number) {
    this.items.splice(index, 1);
    this.save();
  }

  private save() {
    localStorage.setItem(ELocalStorageKeys.CART, JSON.stringify(this.items));
  }

  get itemCount() {
    return this.items.reduce((acc, item) => acc + item.count, 0);
  }
}

export const cartStore = new CartStore();
