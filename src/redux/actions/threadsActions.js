import history from 'Routing/history';
import forumAPI from 'apis/forumAPI';
import {
  FETCH_THREADS_BY_CATEGORY_PENDING,
  FETCH_THREADS_BY_CATEGORY_FULFILLED,
  FETCH_THREADS_BY_CATEGORY_ERRORS,
  FETCH_THREAD_PENDING,
  FETCH_THREAD_FULFILLED,
  FETCH_THREAD_ERRORS,
  CREATE_THREAD_FULFILLED,
  CREATE_THREAD_ERRORS,
} from './types';

export const fetchThreadsByCategory =
  (categoryId, itemsPerPage, offset = 0) =>
  async (dispatch) => {
    dispatch({
      type: FETCH_THREADS_BY_CATEGORY_PENDING,
    });
    try {
      const response = await forumAPI.get(
        `/api/threads/?category=${categoryId}&limit=${itemsPerPage}&offset=${offset}`
      );
      dispatch({
        type: FETCH_THREADS_BY_CATEGORY_FULFILLED,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: FETCH_THREADS_BY_CATEGORY_ERRORS,
        payload: err.response,
      });
    }
  };

export const fetchThread = (threadId) => async (dispatch) => {
  dispatch({
    type: FETCH_THREAD_PENDING,
  });
  try {
    const response = await forumAPI.get(`/api/threads/${threadId}`);
    dispatch({
      type: FETCH_THREAD_FULFILLED,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_THREAD_ERRORS,
      payload: err.response,
    });
  }
};

export const createThread = (data) => async (dispatch) => {
  try {
    const response = await forumAPI.post('/api/threads/', data);
    const { id } = response.data;
    history.push(`/threads/${id}`);
    dispatch({
      type: CREATE_THREAD_FULFILLED,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: CREATE_THREAD_ERRORS,
      payload: err.response,
    });
  }
};
