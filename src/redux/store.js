import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import persistReducer from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import taskReducer from "./reducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};

export const persistedTaskReducer = persistReducer(persistConfig, taskReducer);

// export const store = configureStore({
//   reducer: {
//     tasks: persistedTaskReducer,
//   },
// });

// export default () => {
//     let store = createStore(persistedTaskReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
// }

export const store = createStore(persistedTaskReducer);
export const persistor = persistStore(store);
