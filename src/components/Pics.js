import React, { useState, useEffect }  from 'react';

export default function Pics() {
    const [info, setInfo] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        fetch("https://www.reddit.com/r/pics.json")
        .then(res => res.json())
        .then(result => {
            setInfo(result.data.children)
        }, error => {
            setError(error);
        })
    }, [])

    return (
        <ul className="user-details">
            {info.map(({data}) => (
                <li style={{ listStyle: 'none' }} key={data.id}>
                    <span>{data.title}</span>
                    <img src={data.thumbnail} />
                </li>
            ))}

            {info.length == 0 ? 'Loading' : ''}
        </ul>
    )
}
