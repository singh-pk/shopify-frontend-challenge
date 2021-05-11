import { combineReducers } from 'redux';

import movieReducer from './movie/movieReducers';
import modalReducer from './modal/modalReducers';

export default combineReducers({ movie: movieReducer, modal: modalReducer });
