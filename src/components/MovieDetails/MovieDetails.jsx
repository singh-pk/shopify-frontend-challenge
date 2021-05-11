import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../CustomButton/CustomButton';

import {
  addToNominatedMovieListStart,
  removeFromNominatedMovieListStart,
} from '../../redux/movie/movieActions';

import { toggleModalHidden } from '../../redux/modal/modalActions';

import {
  selectMovieById,
  selectNominatedMovieList,
  selectNominatedMovieListById,
} from '../../redux/movie/movieSelectors';

import movieDetailsStyles from './MovieDetails.module.scss';

const MovieDetails = ({
  movieId,
  results,
  movieById,
  addToNominatedMovieListStart,
  toggleModalHidden,
  removeFromNominatedMovieListStart,
  nominatedMovieList,
  nominatedMovieListById,
}) => {
  let handleNominateButtonClick = () =>
    Object.keys(nominatedMovieList).length < 5
      ? addToNominatedMovieListStart(movieById)
      : toggleModalHidden();

  let handleRemoveNominateButtonClick = () =>
    removeFromNominatedMovieListStart(movieId);

  return (
    <li className={movieDetailsStyles.movieDetails}>
      {results ? movieById.Title : nominatedMovieListById.Title} (
      {results ? movieById.Year : nominatedMovieListById.Year})
      {results ? (
        <CustomButton
          handleClick={handleNominateButtonClick}
          disabled={nominatedMovieList[movieId] !== undefined ? true : false}
        >
          Nominate
        </CustomButton>
      ) : (
        <CustomButton handleClick={handleRemoveNominateButtonClick}>
          Remove
        </CustomButton>
      )}
    </li>
  );
};

const mapStateToProps = (_, ownProps) =>
  createStructuredSelector({
    movieById: selectMovieById(ownProps.movieId),
    nominatedMovieList: selectNominatedMovieList,
    nominatedMovieListById: selectNominatedMovieListById(ownProps.movieId),
  });

const mapDispatchToProps = dispatch => ({
  addToNominatedMovieListStart: movie =>
    dispatch(addToNominatedMovieListStart({ movie })),
  toggleModalHidden: () => dispatch(toggleModalHidden()),
  removeFromNominatedMovieListStart: movieId =>
    dispatch(removeFromNominatedMovieListStart({ movieId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
