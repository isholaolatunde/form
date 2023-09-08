import { createSlice } from "@reduxjs/toolkit";

type addonCheckbox = {
  addons: {
    id: number;
    header: string;
    payment: number;
    checked: boolean;
  }[];
};

const initialState: addonCheckbox = {
  addons: [],
};

export const addonsSlice = createSlice({
  name: "addons",
  initialState,
  reducers: {
    saveAddon: (state, action) => {
      const newAddon = action.payload;
      const existingAddon = state.addons.find(
        (addon) => addon.id === newAddon.id
      );

      if (!existingAddon) {
        state.addons.push({
          id: newAddon.id,
          header: newAddon.header,
          payment: newAddon.payment,
          checked: newAddon.checked,
        });
      }
    },

    removeAddon: (state, action) => {
      const id = action.payload;
      state.addons = state.addons.filter((addon) => addon.id !== id);
    },
  },
});

export const { saveAddon, removeAddon } = addonsSlice.actions;

export default addonsSlice;
