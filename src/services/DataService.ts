import {Item} from "../@types/Item.ts";

export class DataService {
    public static getArbitraryListOfItems(): Item[] {
        return [
            {
                id: 1,
                name: 'Item 1',
                description: 'Description 1',
                price: 100,
                stock: 10,
                category: 'Category 1',
                image: 'https://via.placeholder.com/150'
            },
            {
                id: 2,
                name: 'Item 2',
                description: 'Description 2',
                price: 200,
                stock: 20,
                category: 'Category 2',
                image: 'https://via.placeholder.com/150'
            },
            {
                id: 3,
                name: 'Item 3',
                description: 'Description 3',
                price: 300,
                stock: 30,
                category: 'Category 3',
                image: 'https://via.placeholder.com/150'
            },
            {
                id: 4,
                name: 'Item 4',
                description: 'Description 4',
                price: 400,
                stock: 40,
                category: 'Category 4',
                image: 'https://via.placeholder.com/150'
            },
            {
                id: 5,
                name: 'Item 5',
                description: 'Description 5',
                price: 500,
                stock: 50,
                category: 'Category 5',
                image: 'https://via.placeholder.com/150'
            },
        ]
    }
}