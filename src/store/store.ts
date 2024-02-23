import { combineReducers, configureStore } from '@reduxjs/toolkit';
import commonFlags from '@/store/reducers/commonFlags';
import { materialsApi } from '@/services/materialsService';

const rootReducer = combineReducers({
  [materialsApi.reducerPath]: materialsApi.reducer,
  commonFlags: commonFlags.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(materialsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
