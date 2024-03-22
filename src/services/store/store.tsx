import { configureStore } from '@reduxjs/toolkit';
import slice from './reducers/user';
const store = configureStore({
  reducer: {
    user: slice,
  },
});

export default store;
