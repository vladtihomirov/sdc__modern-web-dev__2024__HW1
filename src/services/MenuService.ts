import {BaseService} from "./BaseService.ts";
import {IMenuItem} from "../@types/IMenuItem.ts";

export class MenuService extends BaseService {
  public static useMenuItems = (initialValue: IMenuItem[] = []) => {
    return this.useFetch<IMenuItem[], IMenuItem[]>('meals', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }, initialValue);
  }

  public static useCategories = (initialValue: string[] = []) => {
    return this.useFetch<IMenuItem[], string[]>('meals', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }, [], (data: IMenuItem[]) => {
      return Array.from(new Set(data.map(item => item.category))) ?? initialValue;
    });
  }
}