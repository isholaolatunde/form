import { createSlice } from "@reduxjs/toolkit";

type UserPlanSelection = {
  type: string;
  payment: number;
};

const initialState: UserPlanSelection = {
  type: "",
  payment: 0,
};

export const userPlanSelection = createSlice({
  name: "userPlanSelection",
  initialState,
  reducers: {
    saveUserPlanSelection: (state, action) => {
      return {
        ...state,
        type: action.payload.type,
        payment: action.payload.payment,
      };
    },
  },
});

export const { saveUserPlanSelection } = userPlanSelection.actions;

export default userPlanSelection;
