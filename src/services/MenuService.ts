import {BaseService} from "./BaseService.ts";
import {IMenuItem} from "../@types/IMenuItem.ts";

export class MenuService extends BaseService {
  public static getCategories(): Promise<string[]> {
    return this.get<string[]>('menu/menuCategories.json');
  }

  public static getMenuItems(): Promise<IMenuItem[]> {
    return this.get<IMenuItem[]>('menu/items.json');
  }
}