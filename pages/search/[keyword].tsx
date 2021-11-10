import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';
import ResultMovies from '../../components/organisms/ResultMovies';
import { getResultMovies } from '../../services/data_api';
import { DetailMovieTypes } from '../../services/data_types';

interface SearchProps {
  keyword: string;
  movies: DetailMovieTypes[];
}

export default function Search({ keyword, movies }: SearchProps) {
  return (
    <>
      <Navbar />
      <ResultMovies keyword={keyword} movies={movies} />
      <Footer />
    </>
  );
}

interface GetServerSideProps {
  params: {
    keyword: string;
  };
}

export async function getServerSideProps({ params } : GetServerSideProps) {
  const { keyword } = params;
  const response: any = await getResultMovies(keyword);
  const movies = response.results;

  return {
    props: {
      keyword,
      movies,
    },
  };
}
