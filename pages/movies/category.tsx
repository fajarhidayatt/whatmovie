import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { getCategories, getCategoryMovies } from '../../services/data_api';
import { CategoryTypes, DetailMovieTypes } from '../../services/data_types';
import MovieItem from '../../components/molecules/MovieItem';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';

interface CategoryProps {
  movies: DetailMovieTypes[];
  categories: CategoryTypes[];
  totalPages: number;
  id: number;
  p: number;
  catActive: string;
}

export default function category(props: CategoryProps) {
  const {
    movies, categories, totalPages, id, p, catActive,
  } = props;

  const [active, setActive] = useState(catActive);
  const [idc, setIdc] = useState(id);
  const [pageActive, setPageActive] = useState(p);
  const router = useRouter();

  useEffect(() => {
    if (pageActive > totalPages) {
      setPageActive(totalPages);
    }
    router.push(`/movies/category?idc=${idc}&cat=${active}&page=${pageActive}`);
  }, [idc, pageActive, totalPages]);

  return (
    <>
      <Navbar />
      <div className="section-category container-xxxl my-5" style={{ minHeight: '100vh' }}>
        <div className="my-5">
          <h3 className="fw-bold">Browse by category</h3>
          <div className="button-wrapper mb-4">
            {categories.map((cat: CategoryTypes) => (
              <button
                key={cat.id}
                type="button"
                className={`btn ${active === cat.name ? 'btn-active' : ''}`}
                onClick={() => {
                  setActive(cat.name);
                  return setIdc(cat.id);
                }}
              >
                {cat.name}
              </button>
            ))}
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
        idc: string,
        page: string,
        cat: string
    }
}

export async function getServerSideProps({ query }: GetServerSideProps) {
  const { idc, page, cat: catActive } = query;
  const id = Number(idc);
  const p = Number(page);

  const dataCategories: any = await getCategories();
  const categories = dataCategories?.genres?.filter((genre: CategoryTypes) => genre.name !== 'Documentary' && genre.name !== 'Romance' && genre.name !== 'Drama');

  const dataMovies: any = await getCategoryMovies(id, p);
  const movies = dataMovies.results;

  const totalPages = Number(dataMovies.total_pages);

  return {
    props: {
      movies,
      categories,
      totalPages,
      id,
      p,
      catActive,
    },
  };
}
