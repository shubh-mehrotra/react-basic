export const GET_ALBUMS = "GET_ALBUMS";
export const SET_ALBUMS = "SET_ALBUMS";

export function getAlbums() {
    return { type: GET_ALBUMS }
}

export const setAlbums = (albums = []) => {
    return {
        type: SET_ALBUMS,
        payload: albums,
    }
}