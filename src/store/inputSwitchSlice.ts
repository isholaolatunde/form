import { createSlice } from "@reduxjs/toolkit";

type inputSwitch = {
  clicked: boolean;
};

const initialState: inputSwitch = {
  clicked: false,
};

export const inputSwitchSlice = createSlice({
  name: "inputSwitch",
  initialState,
  reducers: {
    saveStatus: (state, action) => {
      state.clicked = action.payload;
    },
  },
});

export const { saveStatus } = inputSwitchSlice.actions;

export default inputSwitchSlice;
