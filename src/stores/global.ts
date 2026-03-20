import { configureStore } from '@reduxjs/toolkit';
import { stateSlice } from '../slices/stateSlice.ts';

const globalStore = configureStore({
  reducer: stateSlice.reducer
});

export default { globalStore };
