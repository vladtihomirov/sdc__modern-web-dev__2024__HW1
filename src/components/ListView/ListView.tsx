import './ListView.css'
import {DataService} from "../../services/DataService.ts";
import {useEffect, useState} from "react";
import {Item} from "../../@types/Item.ts";

function ListView() {
    const [items, setItems] = useState<Item[] | null>(null);

    useEffect(() => {
        DataService.getArbitraryListOfItems().then(items => {
            return setItems(items);
        });
    }, []);

    return (<>
        {items && items.map(item => (
            <div className="item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>Price: {item.price}</p>
                    <p>Stock: {item.stock}</p>
                    <p>Category: {item.category}</p>
                </div>
            </div>
        ))}
    </>)
}

export default ListView
