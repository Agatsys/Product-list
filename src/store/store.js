import { combineReducers, createStore, applyMiddleware } from "redux";
import newProductReducer from "./reducers/product.reducer";
import editProductReducer from './reducers/editProduct.reducer'
import commentsReducer from "./reducers/addComment.reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 




let reducers = combineReducers({
    newProduct: newProductReducer,
    editProduct: editProductReducer,
    comments: commentsReducer
});

const persistConfig = {
    key: 'root',
    storage,
  }
   
const persistedReducer = persistReducer(persistConfig, reducers)

const middlewares = [
    thunk
]

let store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares),
        // other store enhancers if any
    )
);

export const persistor = persistStore(store)

export default store;