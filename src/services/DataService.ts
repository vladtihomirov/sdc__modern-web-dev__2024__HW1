import {Item} from "../@types/Item.ts";
import {BaseService} from "./BaseService.ts";

export class DataService extends BaseService {
    public static getArbitraryListOfItems(): Promise<Item[]> {
        return this.get<Item[]>('items.json');
    }
}