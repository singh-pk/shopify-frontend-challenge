import { takeLatest, all, put, call } from 'redux-saga/effects';

import { getMovieLists } from '../../services/services';
import transformData from '../../utils/transformData';
import persistData from '../../utils/persistData';
import getPersistedData from '../../utils/getPersistedData';

import {
  fetchMovieSuccess,
  fetchMovieFailure,
  addToNominatedMovieListSuccess,
  addToNominatedMovieListFailure,
  removeFromNominatedMovieListSuccess,
  removeFromNominatedMovieListFailure,
} from './movieActions';

import MovieActionTypes from './movieActionTypes';

function* fetchMovie({ payload: { query, page } }) {
  try {
    let res = yield call(getMovieLists, query, page);
    if (res.data.Error) {
      yield put(fetchMovieFailure(res.data.Error));
    } else {
      let transformedResponse = yield call(transformData, res.data.Search);
      yield put(fetchMovieSuccess(transformedResponse));
    }
  } catch (err) {
    yield put(fetchMovieFailure(err));
  }
}

function* addToNominatedList({ payload: { movie } }) {
  try {
    let nominatedList = yield call(getPersistedData, 'movieNominatedList');
    let newNominatedList = yield { ...nominatedList, [movie.imdbID]: movie };
    yield call(persistData, 'movieNominatedList', newNominatedList);
    yield put(addToNominatedMovieListSuccess(newNominatedList));
  } catch (err) {
    yield put(addToNominatedMovieListFailure(err));
  }
}

function* removeFromNominatedList({ payload: { movieId } }) {
  try {
    let nominatedList = yield call(getPersistedData, 'movieNominatedList');
    yield delete nominatedList[movieId];
    let newNominatedList = { ...nominatedList };
    yield call(persistData, 'movieNominatedList', newNominatedList);
    yield put(removeFromNominatedMovieListSuccess(newNominatedList));
  } catch (err) {
    yield put(removeFromNominatedMovieListFailure(err));
  }
}

function* onFetchMovieListStart() {
  yield takeLatest(MovieActionTypes.FETCH_MOVIE_LIST_START, fetchMovie);
}

function* onAddToNominatedListStart() {
  yield takeLatest(
    MovieActionTypes.ADD_TO_NOMINATED_MOVIE_LIST_START,
    addToNominatedList
  );
}

function* onRemoveFromNominatedListStart() {
  yield takeLatest(
    MovieActionTypes.REMOVE_FROM_NOMINATED_MOVIE_LIST_START,
    removeFromNominatedList
  );
}

export default function* movieSaga() {
  yield all([
    call(onFetchMovieListStart),
    call(onAddToNominatedListStart),
    call(onRemoveFromNominatedListStart),
  ]);
}
