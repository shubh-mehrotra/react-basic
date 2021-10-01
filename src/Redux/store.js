import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import submittedValueReducer from './reducers/submittedValueReducer';
import commentReducer from './reducers/comment.reducer';
import ReduxThunk from 'redux-thunk';
import userReducer from './reducers/user.reducer';
import albumReducer from './reducers/album.reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const allReducers = combineReducers({
    submittedValue: submittedValueReducer,
    commentReducer,
    userReducer,
    albumReducer
});

// THUNK SETUP
const store = createStore(
    allReducers,
    compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
);

// SAGA SETUP
// const store = createStore(
//     allReducers,
//     applyMiddleware(sagaMiddleware),
// );

// sagaMiddleware.run(rootSaga);

export default store;