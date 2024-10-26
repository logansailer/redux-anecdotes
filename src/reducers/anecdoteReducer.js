import { createSlice } from "@reduxjs/toolkit";
import annecdoteService from '../services/anecdotes'

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await annecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload;
      const toChange = state.findIndex((n) => n.id === id);
      state[toChange].votes += 1;
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdote(state, action) {
      return action.payload;
    },
  },
});

export const { vote, appendAnecdote, setAnecdote } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
