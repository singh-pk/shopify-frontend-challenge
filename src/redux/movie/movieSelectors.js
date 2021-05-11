import { createSelector } from 'reselect';

const selectMovie = state => state.movie;

export const selectMovieList = createSelector(
  [selectMovie],
  movie => movie.movieList
);

export const selectNominatedMovieList = createSelector(
  [selectMovie],
  movie => movie.nominatedMovieList
);

export const selectMovieListLoading = createSelector(
  [selectMovie],
  movie => movie.movieListLoading
);

export const selectNominatedMovieListLoading = createSelector(
  [selectMovie],
  movie => movie.nominatedMovieListLoading
);

export const selectMovieById = movieId =>
  createSelector([selectMovieList], movieList => movieList[movieId]);

export const selectNominatedMovieListById = movieId =>
  createSelector(
    [selectNominatedMovieList],
    nominatedMovieList => nominatedMovieList[movieId]
  );

export const selectMovieError = createSelector(
  [selectMovie],
  movie => movie.error
);
