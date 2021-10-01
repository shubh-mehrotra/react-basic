import { call, put, takeEvery } from '@redux-saga/core/effects';
import albumService from '../../services/album.service';
import { GET_ALBUMS, setAlbums } from '../actions/albumActions';

function* getAlbums() {
    try {
        const albums = yield call(albumService.getAlbums);
    
        yield put(setAlbums(albums));
    } catch(error) {}
}

export function* waitForFetchAlbums() {
    yield takeEvery(GET_ALBUMS, getAlbums);
}