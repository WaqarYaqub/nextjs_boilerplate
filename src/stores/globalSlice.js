import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testData: {
    name: "Waqar",
  },
};
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setTestDataSucces: (state, action) => {
      state.testData = action.payload;
    },
  },
});

export const { setTestDataSucces } = globalSlice.actions;

export default globalSlice.reducer;
