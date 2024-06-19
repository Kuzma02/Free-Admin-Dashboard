import { createSlice } from "@reduxjs/toolkit";

type SidebarState = {
  isSidebarOpen: boolean;
};

const initialState: SidebarState = {
  isSidebarOpen: true,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { setSidebar } = dashboardSlice.actions;

export default dashboardSlice.reducer;
