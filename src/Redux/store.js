import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import submittedValueReducer from './reducers/submittedValueReducer';
import testReducer from './reducers/testReducer';
import ReduxThunk from 'redux-thunk';
import userReducer from './reducers/user.reducer';

const allReducers = combineReducers({
    submittedValue: submittedValueReducer,
    testValue: testReducer,
    userReducer,
});

export const store = createStore(
    allReducers,
    compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
);