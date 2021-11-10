import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import MovieItem from '../../components/molecules/MovieItem';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';
import { getTrendingMovies } from '../../services/data_api';
import { DetailMovieTypes } from '../../services/data_types';

interface TrendingProps {
  movies: DetailMovieTypes[];
  totalPages: number;
  p: number;
  q: string;
}

export default function trending(props: TrendingProps) {
  const {
    movies, totalPages, q, p,
  } = props;

  const [query, setQuery] = useState(q);
  const [pageActive, setPageActive] = useState(p);
  const router = useRouter();

  useEffect(() => {
    if (pageActive > totalPages) {
      setPageActive(totalPages);
    }
    router.push(`/movies/trending?q=${query}&page=${pageActive}`);
  }, [query, pageActive, totalPages]);

  return (
    <>
      <Navbar />
      <div className="section-trending container-xxxl my-5" style={{ minHeight: '100vh' }}>
        <div className="d-flex flex-column flex-sm-row align-items-start gap-3 my-5">
          <h3 className="fw-bold">Trending Movies</h3>
          <div className="button-wrapper d-flex">
            <button
              type="button"
              className={`btn btn-trending ${query === 'week' ? 'btn-active' : ''}`}
              onClick={() => setQuery('week')}
            >
              This Week
            </button>
            <button
              type="button"
              className={`btn btn-trending ${query === 'day' ? 'btn-active' : ''}`}
              onClick={() => setQuery('day')}
            >
              Today
            </button>
          </div>
        </div>
        <div className="grid-wrapper flex-row flex-wrap mb-5">
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
                    type="poster"
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <ReactPaginate
            onPageChange={(event: any) => setPageActive(event.selected + 1)}
            forcePage={pageActive - 1}
            pageRangeDisplayed={3}
            pageCount={totalPages}
            containerClassName="pagination pagination-horizontal"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            nextLabel="next"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            previousLabel="previous"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            activeClassName="active"
            marginPagesDisplayed={3}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

interface GetServerSideProps {
    query: {
        q: string,
        page: string
    }
}

export async function getServerSideProps({ query }: GetServerSideProps) {
  const { q, page } = query;
  const p = Number(page);

  const response: any = await getTrendingMovies(q, p);
  const movies = response.results;
  const totalPages = Number(response.total_pages);

  return {
    props: {
      movies,
      totalPages,
      q,
      p,
    },
  };
}
