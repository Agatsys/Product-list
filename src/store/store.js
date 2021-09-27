import { combineReducers, createStore } from "redux";
import newProductReducer from "./reducers/productReducer";

let reducers = combineReducers({
    newProduct: newProductReducer
});

let store = createStore(reducers);

export default store;