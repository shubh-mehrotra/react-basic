import React, { useState, useEffect } from 'react'

export default function StoreList() {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        fetchStores();
    }, []);

    const fetchStores = async () => {
        const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get");
        const stores = await data.json();

        setStores(stores.data);
    }

    return (
        <div>
            {stores.map(store => (
                <h1 key={store.itemId}>{store.item.name}</h1>
            ))}

            {stores.length == 0 ? 'Loading' : ''}
        </div>
    )
}
