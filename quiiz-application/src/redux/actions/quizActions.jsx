import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SET_SETTINGS = 'SET_SETTINGS';
export const SET_SCORE = 'SET_SCORE';

export const fetchCategories = () => async dispatch => {
  const response = await axios.get('https://opentdb.com/api_category.php');
  dispatch({ type: FETCH_CATEGORIES, payload: response.data.trivia_categories });
};

export const fetchQuestions = settings => async dispatch => {
  const { amount, category, difficulty, type } = settings;
  const response = await axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`);
  dispatch({ type: FETCH_QUESTIONS, payload: response.data.results });
};

export const setSettings = settings => ({
  type: SET_SETTINGS,
  payload: settings
});

export const setScore = score => ({
  type: SET_SCORE,
  payload: score
});
