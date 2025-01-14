import {BaseService} from "./BaseService.ts";
import {IMenuItem} from "../@types/IMenuItem.ts";

export class MenuService extends BaseService {
  public static getCategories(): Promise<string[]> {
    return this.get<IMenuItem[]>('meals').then((data => {
      return Array.from(new Set(data.map(item => item.category)));
    }));
  }

  public static getMenuItems(): Promise<IMenuItem[]> {
    return this.get<IMenuItem[]>('meals');
  }
}