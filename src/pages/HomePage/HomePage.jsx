import { useState, useEffect, useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

import {
  fetchMovieStart,
  emptyMovieList,
  clearError,
} from '../../redux/movie/movieActions';
import {
  selectMovieList,
  selectNominatedMovieList,
  selectMovieError,
  selectMovieListLoading,
  selectNominatedMovieListLoading,
} from '../../redux/movie/movieSelectors';

import debounce from '../../utils/debounce';

import homepageStyles from './HomePage.module.scss';

const CardWithSpinner = WithSpinner(Card);

const HomePage = ({
  fetchMovieStart,
  emptyMovieList,
  movieList,
  nominatedMovieList,
  error,
  clearError,
  movieListLoading,
  nominatedMovieListLoading,
}) => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  // eslint-disable-next-line
  const search = useCallback(() => fetchMovieStart(query, page), [query, page]);

  const optimizedSearch = useMemo(() => debounce(search), [search]);

  const handleSearchChange = event => setQuery(event.target.value);

  useEffect(() => {
    emptyMovieList();
    if (query.length > 0) {
      setPage(1);
      optimizedSearch();
    } else if (error) {
      clearError();
    }
    // eslint-disable-next-line
  }, [query]);

  useEffect(() => {
    page > 1 && search();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className={homepageStyles.homepage}>
      <Header headerText='The Shoppies' />

      <main>
        <SearchBar
          name='movie-list'
          value={query}
          handleChange={handleSearchChange}
        />

        <div className={homepageStyles.homepageCards}>
          {!!Object.keys(movieList).length && (
            <CardWithSpinner
              cardHeader={`Results for "${query}"`}
              results
              movies={Object.keys(movieList)}
              isLoading={movieListLoading}
            />
          )}

          {error && <Card cardHeader={`${error}`} movies={[]} />}

          {!!Object.keys(nominatedMovieList).length && (
            <CardWithSpinner
              cardHeader='Nominations'
              movies={Object.keys(nominatedMovieList)}
              isLoading={nominatedMovieListLoading}
            />
          )}
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  movieList: selectMovieList,
  movieListLoading: selectMovieListLoading,
  nominatedMovieList: selectNominatedMovieList,
  nominatedMovieListLoading: selectNominatedMovieListLoading,
  error: selectMovieError,
});

const mapDispatchToProps = dispatch => ({
  fetchMovieStart: (query, page) => dispatch(fetchMovieStart({ query, page })),
  emptyMovieList: () => dispatch(emptyMovieList()),
  clearError: () => dispatch(clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
