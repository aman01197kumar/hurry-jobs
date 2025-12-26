import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./features/job/jobSlice";

export const store = configureStore({
  reducer: {
    job: jobReducer,
  },
});

// debug: indicate store creation
if (typeof window !== 'undefined') {
  (window as any).__STORE_ID__ = (window as any).__STORE_ID__ ?? Math.random();
  console.log('Redux store created', store.getState());
}

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;