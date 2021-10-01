import Detail from './Detail';
import React, { useState, useEffect } from 'react';

export default function StoreDescription({ match }) {
    const [store, setStoreDetails] = useState({});

    useEffect(() => {
        fetchStoreDetails();
    }, []);

    const fetchStoreDetails = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const store = await data.json();

        setStoreDetails(store.data);
    }

    function helloAlert(param) {
        alert(param)
    }

    return (
        <div>
            <Detail defaultInput="shubh" helloAlert={helloAlert}><br />This is children</Detail>

            <h1>{store.item?.name}</h1>
            {store.item?.media.map(image => (
                <video width="320" height="240" controls key={image.src}>
                    <source src={image.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ))}

            <img src={store.item?.images?.icon} />
        </div>
    )
}
