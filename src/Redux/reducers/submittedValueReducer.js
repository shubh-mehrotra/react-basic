
import { SUBMIT_VALUE } from '../actions/submittedValueActions';

export default function submittedValueReducer(state = "shubh", action) {
    switch (action.type) {
        case SUBMIT_VALUE:
            return action.payload.submittedValue;
        default:
            return state;
    }
}