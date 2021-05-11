import MovieActionTypes from './movieActionTypes';

export const fetchMovieStart = params => ({
  type: MovieActionTypes.FETCH_MOVIE_LIST_START,
  payload: params,
});

export const fetchMovieSuccess = movies => ({
  type: MovieActionTypes.FETCH_MOVIE_LIST_SUCCESS,
  payload: movies,
});

export const fetchMovieFailure = err => ({
  type: MovieActionTypes.FETCH_MOVIE_LIST_FAILURE,
  payload: err,
});

export const clearError = () => ({
  type: MovieActionTypes.CLEAR_ERROR,
});

export const addToNominatedMovieListStart = movie => ({
  type: MovieActionTypes.ADD_TO_NOMINATED_MOVIE_LIST_START,
  payload: movie,
});

export const addToNominatedMovieListSuccess = movies => ({
  type: MovieActionTypes.ADD_TO_NOMINATED_MOVIE_LIST_SUCCESS,
  payload: movies,
});

export const addToNominatedMovieListFailure = err => ({
  type: MovieActionTypes.ADD_TO_NOMINATED_MOVIE_LIST_FAILURE,
  payload: err,
});

export const removeFromNominatedMovieListStart = movieId => ({
  type: MovieActionTypes.REMOVE_FROM_NOMINATED_MOVIE_LIST_START,
  payload: movieId,
});

export const removeFromNominatedMovieListSuccess = movies => ({
  type: MovieActionTypes.REMOVE_FROM_NOMINATED_MOVIE_LIST_SUCCESS,
  payload: movies,
});

export const removeFromNominatedMovieListFailure = err => ({
  type: MovieActionTypes.REMOVE_FROM_NOMINATED_MOVIE_LIST_FAILURE,
  payload: err,
});

export const emptyMovieList = () => ({
  type: MovieActionTypes.EMPTY_MOVIE_LIST,
});
