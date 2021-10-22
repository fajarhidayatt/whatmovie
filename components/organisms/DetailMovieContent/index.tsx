import { DetailMovieTypes } from '../../../services/data_types';
import SectionHeader from './SectionHeader';
import SectionInfo from './SectionInfo';
import SectionRecom from './SectionRecom';

interface DetailMovieContentProps {
    movie: DetailMovieTypes;
    similarMovies: DetailMovieTypes[];
}

export default function DetailMovieContent(props: DetailMovieContentProps) {
  const { movie, similarMovies } = props;

  return (
    <div className="section-content">
      <SectionHeader movie={movie} />
      <SectionInfo movie={movie} />
      <SectionRecom similarMovies={similarMovies} />
    </div>
  );
}
