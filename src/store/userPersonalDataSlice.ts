import { createSlice } from "@reduxjs/toolkit";

type UserPersonalData = {
  username: string;
  email: string;
  phoneNumber: string;
};

const initialState: UserPersonalData = {
  username: "",
  email: "",
  phoneNumber: "",
};

export const userPersonalData = createSlice({
  name: "userPersonalData",
  initialState,
  reducers: {
    saveUserPersonalData: (state, action) => {
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
      };
    },
  },
});

export const { saveUserPersonalData } = userPersonalData.actions;

export default userPersonalData;
