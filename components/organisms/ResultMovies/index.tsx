import { DetailMovieTypes } from '../../../services/data_types';
import MovieItem from '../../molecules/MovieItem';
import MovieNotFound from './MovieNotFound';

interface PopularMoviesProps {
  keyword: string;
  movies: DetailMovieTypes[];
}

export default function ResultMovies({ keyword, movies }: PopularMoviesProps) {
  return (
    <div className="container-xxxl mt-5" style={{ minHeight: '100vh' }}>
      <div className="section-title mb-5 text-center">
        <h3 className="fw-bold mb-3">Search result for</h3>
        <h2 className="fw-bolder text-purple">{`"${keyword}"`}</h2>
      </div>
      <div className="grid-wrapper flex-row flex-wrap section-result">
        {(!keyword || movies.length === 0) ? (
          <div className="pt-3">
            <MovieNotFound />
          </div>
        ) : (
          <div className="row row-cols-auto">
            {movies.map((movie: DetailMovieTypes) => {
              if (movie.poster_path !== null) {
                return (
                  <MovieItem
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    release_date={movie.release_date}
                    poster={movie.poster_path}
                    rate={movie.vote_average}
                    count={movie.vote_count}
                    genres={movie.genres}
                    type="poster"
                  />
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
}
