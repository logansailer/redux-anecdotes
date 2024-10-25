import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { setNotif, deleteNotif } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) =>
    state.filter === ""
      ? state.anecdotes
      : state.anecdotes.filter((anecdote) =>
          anecdote.content.includes(state.filter)
        )
  );

  [...anecdotes].sort((a, b) => b.votes - a.votes);

  const addVote = (anecdote) => {
    dispatch(vote(anecdote.id));
    dispatch(
      setNotif(`you voted '${anecdote.content}'`),
      setTimeout(() => {
        dispatch(deleteNotif());
      }, 1000 * 3)
    );
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
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
