import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { getCategories, getCategoryMovies } from '../../../services/data_api';
import { CategoryTypes, DetailMovieTypes } from '../../../services/data_types';
import MovieItem from '../../molecules/MovieItem';

export default function CategoryMovies() {
  const [active, setActive] = useState('Action');
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState(28);
  const [movies, setMovies] = useState([]);

  const getCategoriesAPI = useCallback(async () => {
    const response: any = await getCategories();
    const genres = response.genres.filter((genre: CategoryTypes) => genre.name !== 'Documentary' && genre.name !== 'Romance' && genre.name !== 'Drama');
    setCategories(genres);
  }, []);

  const getCategoryMoviesAPI = useCallback(async (idc) => {
    const response: any = await getCategoryMovies(idc);
    setMovies(response.results);
  }, []);

  useEffect(() => {
    getCategoriesAPI();
  }, []);

  useEffect(() => {
    getCategoryMoviesAPI(id);
  }, [id]);

  return (
    <div className="section-category container-xxxl mt-0 mt-lg-5">
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <h3 className="fw-bold">Browse by category</h3>
        <Link href={`/movies/category?idc=${id}&cat=${active}&page=1`}>
          <a className="view-all">View All</a>
        </Link>
      </div>
      <div className="button-wrapper mb-4">
        {categories.map((category: CategoryTypes) => (
          <button
            key={category.id}
            type="button"
            className={`btn ${active === category.name ? 'btn-active' : ''}`}
            onClick={() => {
              setActive(category.name);
              return setId(category.id);
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="category-wrapper scroll-wrapper pb-5">
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
