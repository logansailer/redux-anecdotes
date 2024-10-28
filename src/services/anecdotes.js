import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const createNew = async (content) => {
  const object = { content: content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addVote = async (anecdote) => {
  const toChange = { content: anecdote.content, votes: anecdote.votes + 1 };
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, toChange);
  return response.data;
};

export default { getAll, createNew, addVote };
