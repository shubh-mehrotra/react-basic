
import { TEST_VALUE } from '../actions/testActions';

export default function testReducer(state = "shubh 2", action) {
    switch (action.type) {
        case TEST_VALUE:
            return action.payload.testValue;
        default:
            return state;
    }
}