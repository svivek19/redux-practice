import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer(state, action) {
      state.push(action.payload);
    },
    deleteCustomer(state, action) {
      const delIndex = action.payload;
      return state.filter((index) => index !== delIndex);
    },
  },
});

export const { addCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;
