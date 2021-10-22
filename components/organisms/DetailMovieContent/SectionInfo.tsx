import { DetailMovieTypes } from '../../../services/data_types';

interface SectionInfoProps {
    movie: DetailMovieTypes;
}

export default function SectionInfo(props: SectionInfoProps) {
  const { movie } = props;
  const year = new Date(movie.release_date);

  return (
    <div className="section-info px-4 px-sm-5">
      <div className="d-flex flex-column flex-sm-row gap-0 gap-sm-5 mb-0 mb-sm-3">
        <div>
          <h5 className="fw-bold">Status</h5>
          <p>{movie.status}</p>
        </div>
        <div>
          <h5 className="fw-bold">Release date</h5>
          <p>{year.toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
        <div>
          <h5 className="fw-bold">Duration</h5>
          <p>{`${movie.runtime} Min`}</p>
        </div>
      </div>
      <div>
        <h5 className="fw-bold overview">Overview</h5>
        <p>{movie.overview}</p>
      </div>

    </div>
  );
}
