import MovieActionTypes from './movieActionTypes';
import getPersistedData from '../../utils/getPersistedData';

const INITIALSTATE = {
  movieList: {},
  nominatedMovieList: getPersistedData('movieNominatedList'),
  movieListLoading: false,
  nominatedMovieListLoading: false,
  error: null,
};

const movieReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case MovieActionTypes.FETCH_MOVIE_LIST_START:
      return {
        ...state,
        movieListLoading: true,
      };
    case MovieActionTypes.FETCH_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        movieList: { ...state.movieList, ...action.payload },
        movieListLoading: false,
        error: null,
      };
    case MovieActionTypes.FETCH_MOVIE_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        movieList: {},
        movieListLoading: false,
      };
    case MovieActionTypes.ADD_TO_NOMINATED_MOVIE_LIST_START:
      return {
        ...state,
        error: null,
        nominatedMovieListLoading: true,
      };
    case MovieActionTypes.ADD_TO_NOMINATED_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        nominatedMovieList: action.payload,
        error: null,
        nominatedMovieListLoading: false,
      };
    case MovieActionTypes.ADD_TO_NOMINATED_MOVIE_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        nominatedMovieListLoading: false,
      };
    case MovieActionTypes.REMOVE_FROM_NOMINATED_MOVIE_LIST_START:
      return {
        ...state,
        error: null,
        nominatedMovieListLoading: true,
      };
    case MovieActionTypes.REMOVE_FROM_NOMINATED_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        nominatedMovieList: action.payload,
        error: null,
        nominatedMovieListLoading: false,
      };
    case MovieActionTypes.REMOVE_FROM_NOMINATED_MOVIE_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        nominatedMovieListLoading: false,
      };
    case MovieActionTypes.EMPTY_MOVIE_LIST:
      return {
        ...state,
        movieList: {},
      };
    case MovieActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default movieReducer;
