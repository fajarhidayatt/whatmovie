import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { getTrendingMovies } from '../../../services/data_api';
import { DetailMovieTypes } from '../../../services/data_types';
import MovieItem from '../../molecules/MovieItem';

export default function TrendingMovies() {
  const [active, setActive] = useState('week');
  const [movies, setMovies] = useState([]);

  const getTrendingMoviesAPI = useCallback(async (param) => {
    const response: any = await getTrendingMovies(param);
    setMovies(response.results);
  }, []);

  useEffect(() => {
    getTrendingMoviesAPI(active);
  }, [active]);

  return (
    <div className="section-trending container-xxxl mt-0 mt-lg-5">
      <div className="d-flex justify-content-between align-items-sm-center align-items-end mb-5">
        <div className="d-flex flex-column flex-sm-row align-items-start gap-3">
          <h3 className="fw-bold">Trending Movies</h3>
          <div className="button-wrapper d-flex">
            <button
              type="button"
              className={`btn btn-trending ${active === 'week' ? 'btn-active' : ''}`}
              onClick={() => setActive('week')}
            >
              This Week
            </button>
            <button
              type="button"
              className={`btn btn-trending ${active === 'day' ? 'btn-active' : ''}`}
              onClick={() => setActive('day')}
            >
              Today
            </button>
          </div>
        </div>
        <div>
          <Link href={`/movies/trending?q=${active}&page=1`}>
            <a className="view-all">
              View All
            </a>
          </Link>
        </div>
      </div>
      <div className="trending-wrapper scroll-wrapper pb-5">
        {movies.map((movie: DetailMovieTypes) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster={movie.poster_path}
            rate={movie.vote_average}
            count={movie.vote_count}
            type="poster"
          />
        ))}
      </div>
    </div>
  );
}
