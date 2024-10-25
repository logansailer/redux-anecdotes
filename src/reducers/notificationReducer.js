import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const notifSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotif(state, action) {
      const content = action.payload;
      state.push(content);
    },
    deleteNotif(state, action) {
      state.pop();
    },
  },
});

export const { setNotif, deleteNotif } = notifSlice.actions;
export default notifSlice.reducer;
