import axios from 'axios';

const BASE_URL = 'http://localhost:9999/api/v1';

export const fetchTodos = () => {
  return axios.get(`${BASE_URL}/ViewAllTodo`);
};

export const createTodo = (todo) => {
  return axios.post(`${BASE_URL}/AddToDoList`, todo);
};

export const updateTodo = (id, updatedTodo) => {
  return axios.put(`${BASE_URL}/UpdateTodo/${id}`, updatedTodo);
};

export const deleteTodo = (id) => {
  return axios.delete(`${BASE_URL}/DeleteTodo/${id}`);
};
