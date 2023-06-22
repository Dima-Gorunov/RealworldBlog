import { combineReducers, configureStore } from '@reduxjs/toolkit';

import ListSlice from './Slice/ListSlice';
import UserSlice from './Slice/UserSlice';

const RootReducer = combineReducers({
  ListStore: ListSlice,
  UserStore: UserSlice,
});

export const store = configureStore({
  reducer: RootReducer,
});
