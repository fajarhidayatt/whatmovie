import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';
import ResultMovies from '../../components/organisms/ResultMovies';

interface SearchProps {
  keyword: string;
}

export default function Search({ keyword }: SearchProps) {
  return (
    <>
      <Navbar />
      <ResultMovies keyword={keyword} />
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

  return {
    props: {
      keyword,
    },
  };
}
