import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { notification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) =>
    state.filter === ""
      ? state.anecdotes
      : state.anecdotes.filter((anecdote) =>
          anecdote.content.includes(state.filter)
        )
  );

  const addVote = (anecdote) => {
    dispatch(vote(anecdote));
    dispatch(notification(`you voted '${anecdote.content}'`, 3));
  };

  return (
    <div>
      {anecdotes
        .slice()
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => addVote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;
