import MovieDetails from '../MovieDetails/MovieDetails';

import cardStyles from './Card.module.scss';

const Card = ({ cardHeader, results, movies }) => {
  return (
    <div className={cardStyles.card}>
      <header className={cardStyles.cardHeader}>{cardHeader}</header>

      <main className={cardStyles.cardBody}>
        <ul>
          {movies.map(id => (
            <MovieDetails results={!!results} movieId={id} key={id} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Card;
