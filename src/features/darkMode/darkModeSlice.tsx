import { createSlice } from "@reduxjs/toolkit";

type DarkModeState = {
  darkMode: boolean;
};

const setDarkMode = (): boolean => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    return true;
  } else {
    document.documentElement.classList.remove("dark");
    return false;
  }
};

const initialState: DarkModeState = {
  darkMode: setDarkMode(),
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      if (state.darkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        state.darkMode = false;
      } else {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        state.darkMode = true;
      }
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
