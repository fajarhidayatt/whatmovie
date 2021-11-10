import Link from 'next/link';
import { CategoryTypes } from '../../../services/data_types';

interface MovieItemProps {
  id: number;
  poster: string;
  backdrop: string;
  title: string;
  release_date: string;
  rate: number;
  count: number;
  genres: CategoryTypes[];
  type: 'poster' | 'backdrop';
}

export default function MovieItem(props: Partial<MovieItemProps>) {
  const {
    id, poster, backdrop, title, rate, count, release_date, genres = [], type,
  } = props;
  const rootImg = process.env.NEXT_PUBLIC_IMG;
  const year = new Date(release_date!);

  let categories = '';
  if (genres.length > 0) {
    categories = genres.map((genre: any) => genre.name).splice(0, 2).join(' | ');
  }

  if (type === 'backdrop') {
    return (
      <div className="movie-item">
        <Link href={`/movie/${id}`}>
          <a>
            <div className="movie-poster mb-3">
              <img src={`${rootImg}/w500${backdrop}`} alt={`backdrop ${title}`} />
            </div>
            <div className="movie-info d-flex flex-row justify-content-between">
              <div>
                <h6 className="fw-bold">{title}</h6>
                <p className="my-1 my-md-2">{`${year.toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' })}`}</p>
                <div className="d-flex align-items-center">
                  <span><i className="fa fa-star" aria-hidden /></span>
                  <span className="ms-2">{`${rate} (${count?.toLocaleString()})`}</span>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="col movie-item">
      <Link href={`/movie/${id}`}>
        <a className="d-flex flex-column">
          <div className="movie-poster mb-3">
            <img src={`${rootImg}/w185${poster}`} alt={`poster ${title}`} />
          </div>
          <div className="movie-info d-flex flex-row justify-content-between">
            <div>
              <h6 className="fw-bold">{title}</h6>
              {genres.length > 0 ? (
                <p className="my-1">{`${year.getFullYear()} • ${categories}`}</p>
              ) : (
                <p className="my-1">{`${year.toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' })}`}</p>
              )}
              <div className="d-flex align-items-center">
                <i className="fa fa-star" aria-hidden />
                <span className="ms-2">
                  {`${rate} (${count?.toLocaleString()})`}
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
