import { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAlbums } from '../Redux/actions/albumActions';

export default function Album() {
    const dispatch = useDispatch();
    const albums = useSelector(state => state.albumReducer);

    useEffect(() => {
        dispatch(getAlbums());
    }, [])

    return (
        <div>
            {albums.map(album => <h1 key={album.id}>{album.title}</h1>)}
        </div>
    )
}
