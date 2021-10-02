import { combineReducers, createStore, applyMiddleware } from "redux";
import newProductReducer from "./reducers/product.reducer";
//import editProductReducer from './reducers/editProduct.reducer'
import commentsReducer from "./reducers/addComment.reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';



let reducers = combineReducers({
    newProduct: newProductReducer,
    comments: commentsReducer
});

const middlewares = [
    thunk
]

let store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(...middlewares),
        // other store enhancers if any
    )
);

export default store;