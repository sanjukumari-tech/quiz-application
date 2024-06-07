import { FETCH_CATEGORIES, FETCH_QUESTIONS, SET_SETTINGS, SET_SCORE } from '../actions/quizActions';

const initialState = {
  categories: [],
  questions: [],
  settings: {
    amount: 10,
    category: '',
    difficulty: 'easy',
    type: 'multiple'
  },
  score: 0
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload };
    case SET_SETTINGS:
      return { ...state, settings: action.payload };
    case SET_SCORE:
      return { ...state, score: action.payload };
    default:
      return state;
  }
};

export default quizReducer;
