import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import { taskReducer } from "./reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["tasks"],
};

export const persistedTaskReducer = persistReducer(persistConfig, taskReducer);

export const store = configureStore({
  reducer: {
    tasks: persistedTaskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
      },
    }),
});

// export default () => {
//     let store = createStore(persistedTaskReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
// }

// export const store = createStore(persistedTaskReducer);
export const persistor = persistStore(store);
