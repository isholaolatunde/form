import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userPersonalDataReducer from "./userPersonalDataSlice";
import userPlanSelectionReducer from "./userPlanSlice";
import inputSwitchReducer from "./inputSwitchSlice";
import addonReducer from "./addonsSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  userInputs: userPersonalDataReducer.reducer,
  userPlan: userPlanSelectionReducer.reducer,
  inputSwitch: inputSwitchReducer.reducer,
  addons: addonReducer.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
