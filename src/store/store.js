import { combineReducers, createStore } from "redux";
import newProductReducer from "./reducers/product.reducer";
import editProductReducer from './reducers/editProduct.reducer'
import deleteProductReducer from "./reducers/deleteProduct.reducer";
import commentsReducer from "./reducers/addComment.reducer";


let reducers = combineReducers({
    newProduct: newProductReducer,
    editProduct: editProductReducer,
    deleteProduct: deleteProductReducer,
    comments: commentsReducer
});

let store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;