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

export const notification = (content, timer) => {
    return async (dispatch) => {
      dispatch(setNotif(content))
      setTimeout(() => {
        dispatch(deleteNotif());
      }, 1000 * timer);
    } 

}
export default notifSlice.reducer;
