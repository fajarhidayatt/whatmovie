import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { getDetailMovie } from '../../../services/data_api';

interface DiscoverItemProps {
  id: number;
}

export default function DiscoverItem(props: DiscoverItemProps) {
  const { id } = props;
  const [data, setData] = useState({
    id: 0,
    backdrop_path: '',
    title: '',
    release_date: '',
    vote_average: 0,
    vote_count: 0,
    runtime: 0,
    genres: [],
  });

  const getDiscoverMovieAPI = useCallback(async (idm) => {
    const response: any = await getDetailMovie(idm);
    setData(response);
  }, []);

  useEffect(() => {
    getDiscoverMovieAPI(id);
  }, []);

  const rootImg = process.env.NEXT_PUBLIC_IMG;
  const year = new Date(data.release_date).getFullYear();
  const categories = data.genres.map((genre: any) => genre.name).splice(0, 2).join(' | ');

  return !data.id ? (
    <div />
  ) : (
    <div className="movie-item">
      <Link href={`/movie/${id}`}>
        <a>
          <div className="movie-poster mb-3">
            <img src={`${rootImg}/w500/${data.backdrop_path}`} alt={`backdrop ${data.title}`} />
          </div>
          <div className="movie-info d-flex flex-row justify-content-between">
            <div>
              <h5 className="fw-bold">{data.title}</h5>
              <p className="my-1 my-md-2">{`${year} • ${categories}`}</p>
              <div className="d-flex align-items-center">
                <span><i className="fa fa-star" aria-hidden /></span>
                <span className="ms-2">{`${data.vote_average} (${data.vote_count.toLocaleString()})`}</span>
              </div>
            </div>
            <span className="mt-2">{`${data.runtime} Min`}</span>
          </div>
        </a>
      </Link>
    </div>
  );
}
