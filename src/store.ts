import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./features/dashboard/dashboardSlice";
import darkModeReducer from "./features/darkMode/darkModeSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    darkMode: darkModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
