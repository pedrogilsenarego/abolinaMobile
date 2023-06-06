import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddle from "@redux-saga/core";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import rootReducer from "./rootReducer";

import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddle();

export const middlewares = [thunk, sagaMiddleware, logger];

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export const store = createStore(
  persistedReducer, // Use the persisted reducer
  composeEnhancers(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// eslint-disable-next-line
export default {
  store,
  persistor,
};
