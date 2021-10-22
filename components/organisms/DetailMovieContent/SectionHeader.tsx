import { DetailMovieTypes } from '../../../services/data_types';

interface SectionHeaderProps {
    movie: DetailMovieTypes;
}

export default function SectionHeader(props: SectionHeaderProps) {
  const { movie } = props;
  const rootImg = process.env.NEXT_PUBLIC_IMG;
  const year = new Date(movie.release_date);
  const categories = movie.genres.map((genre: any) => genre.name).splice(0, 2).join(' | ');

  const onClick = () => {
    const videoTrailer = document.querySelector('.overlay');
    videoTrailer?.classList.add('active');
  };

  return (
    <div className="section-header d-flex flex-row">
      <img src={`${rootImg}/w185/${movie.poster_path}`} alt={`poster ${movie.title}`} />
      <div className="section-title">
        <div>
          <h1 className="fw-bold">{movie.title}</h1>
          <p className="my-1">{`${year.getFullYear()} • ${categories}`}</p>
          <div className="d-flex align-items-center mt-2">
            <span>
              <i className="fa fa-star" aria-hidden />
            </span>
            <div className="ms-2 d-flex flex-row align-items-center">
              <span>
                {`${movie.vote_average} (${movie.vote_count.toLocaleString()})`}
              </span>
              <button
                type="button"
                className="btn-trailer d-flex flex-row align-items-center gap-1 ms-2"
                onClick={onClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
                <span>Trailer</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
