
import { SET_ALBUMS } from '../actions/albumActions';

export default function albumReducer(state = [], action) {
    switch (action.type) {
        case SET_ALBUMS:
            return action.payload;
        default:
            return state;
    }
}