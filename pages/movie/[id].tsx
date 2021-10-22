import { useCallback, useEffect, useState } from 'react';
import DetailMovieContent from '../../components/organisms/DetailMovieContent';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';
import { getDetailMovie, getSimilarMovies, getVideoTrailer } from '../../services/data_api';
import { DetailMovieTypes } from '../../services/data_types';

interface DetailMovieProps {
  movie: DetailMovieTypes;
}

export default function DetailMovie(props: DetailMovieProps) {
  const { movie } = props;
  const [similarMovies, setSimilarMovie] = useState([]);
  const [video, setVideo] = useState({
    name: '',
    key: '',
  });

  const rootImg = process.env.NEXT_PUBLIC_IMG;

  const onClick = () => {
    document.querySelector('.overlay')?.classList.remove('active');
    const videoTrailer = document.querySelector<any>('.video-trailer')!;
    videoTrailer.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
  };

  const getVideoTrailerAPI = useCallback(async (idm) => {
    const response: any = await getVideoTrailer(idm);
    const filterTrailer = response.results.filter((result: any) => result.type === 'Trailer');
    setVideo(filterTrailer[0]);
  }, []);

  const getSimilarMoviesAPI = useCallback(async (idm) => {
    const response: any = await getSimilarMovies(idm);
    setSimilarMovie(response.results);
  }, []);

  useEffect(() => {
    getVideoTrailerAPI(movie.id);
    getSimilarMoviesAPI(movie.id);
  }, []);

  return (
    <>
      <div className="d-none">
        <Navbar />
      </div>
      <div className="detail-movie mb-5">
        <div className="section-backdrop">
          <img src={`${rootImg}/w1280/${movie.backdrop_path}`} alt={`backdrop ${movie.title}`} />
        </div>
        <DetailMovieContent movie={movie} similarMovies={similarMovies} />
        <div className="overlay">
          <div className="trailer-wrapper">
            <button type="button" onClick={onClick}>
              <i className="fa fa-times" />
            </button>
            <h5>Video Trailer</h5>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.key}?version=3&enablejsapi=1`}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              className="video-trailer"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

interface GetServerSideProps {
    params: {
        id: number;
    }
}

export async function getServerSideProps({ params }: GetServerSideProps) {
  const { id } = params;
  const response = await getDetailMovie(id);

  return {
    props: {
      movie: response,
    },
  };
}
