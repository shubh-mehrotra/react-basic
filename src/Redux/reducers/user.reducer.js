
import { SET_USERS } from '../actions/userActions';

export default function userReducer(state = [], action) {
    switch (action.type) {
        case SET_USERS:
            return action.payload;
        default:
            return state;
    }
}