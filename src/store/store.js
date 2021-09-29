import { combineReducers, createStore } from "redux";
import newProductReducer from "./reducers/product.reducer";
import editProductReducer from './reducers/editProduct.reducer'


let reducers = combineReducers({
    newProduct: newProductReducer,
    editProduct: editProductReducer,
});

let store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;