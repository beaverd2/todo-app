import { combineReducers, configureStore } from '@reduxjs/toolkit';
import collectionsReducer from './reducers/CollectionsSlice';
import filterReducer from './reducers/FilterSlice';

const rootReducer = combineReducers({
  collectionsReducer,
  filterReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
