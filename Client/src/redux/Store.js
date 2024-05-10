
import { thunk } from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import your reducers here
import { getProductReducer } from './reducers/ProductsReducer';

const reducer = combineReducers({
    getProducts: getProductReducer,
});

 const middleware = [thunk];

const Store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
