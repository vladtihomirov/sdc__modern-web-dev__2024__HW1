import { makeAutoObservable } from "mobx";
import {INavigationItem} from "../@types/INavigationItem.ts";
import {EPages} from "../@types/EPages.ts";

class NavigationStore {
  public navigationItems: INavigationItem[] = [
    {name: 'Home', url: EPages.HOME, base: EPages.HOME, isActive: false},
    {name: 'Menu', url: EPages.MENU, base: EPages.MENU, isActive: false},
    {name: 'Company', url: EPages.COMPANY, base: EPages.COMPANY, isActive: false},
    {name: 'Login', url: EPages.LOGIN, base: EPages.LOGIN, isActive: false},
  ];

  constructor() {
    makeAutoObservable(this);
  }

  public setActiveItem(url: string) {
    this.navigationItems.forEach((item) => {
      item.isActive = item.base === url;
    });
  }
}

export const navigationStore = new NavigationStore();
