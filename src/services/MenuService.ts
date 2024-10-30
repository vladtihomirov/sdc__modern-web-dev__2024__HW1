import {BaseService} from "./BaseService.ts";
import {IMenuItem} from "../@types/IMenuItem.ts";

export class MenuService extends BaseService {
  public static getCategories(): Promise<string[]> {
    return Promise.resolve([
      "Dessert",
      "Dinner",
      "Breakfast"
    ]);
  }

  public static getMenuItems(): Promise<IMenuItem[]> {
    return this.get<IMenuItem[]>('meals');
  }
}