import { all } from "redux-saga/effects";
import { waitForFetchAlbums } from './sagas/album.saga';

export default function* rootSaga() {
    yield all([waitForFetchAlbums()]);
}