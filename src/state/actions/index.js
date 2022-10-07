import {
    GET_TODOS,
    GET_TODO
  } from './types';
  import axios from 'axios';


export const getToDos = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch({
      type: GET_TODOS,
      payload: res.data
    });
  };

  export const getToDo = id => async dispatch => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    dispatch({
      type: GET_TODO,
      payload: res.data
    });
  };