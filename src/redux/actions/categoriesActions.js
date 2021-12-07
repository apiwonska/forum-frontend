import forumAPI from 'apis/forumAPI';
import {
  FETCH_CATEGORY_PENDING,
  FETCH_CATEGORY_FULFILLED,
  FETCH_CATEGORY_ERRORS,
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_FULFILLED,
  FETCH_CATEGORIES_ERRORS,
} from './types';

export const fetchCategory = (categoryId) => async (dispatch) => {
  dispatch({
    type: FETCH_CATEGORY_PENDING,
  });
  try {
    const response = await forumAPI.get(`/api/categories/${categoryId}`, {
      'axios-retry': {
        retries: 3,
      },
    });
    dispatch({
      type: FETCH_CATEGORY_FULFILLED,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_CATEGORY_ERRORS,
      payload: err.response,
    });
  }
};

export const fetchCategories = () => async (dispatch) => {
  dispatch({
    type: FETCH_CATEGORIES_PENDING,
  });
  try {
    const response = await forumAPI.get(`/api/categories/`);
    dispatch({
      type: FETCH_CATEGORIES_FULFILLED,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_CATEGORIES_ERRORS,
      payload: err.response,
    });
  }
};
