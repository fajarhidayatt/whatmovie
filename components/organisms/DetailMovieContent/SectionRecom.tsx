import { DetailMovieTypes } from '../../../services/data_types';
import MovieItem from '../../molecules/MovieItem';

interface SectionRecomProps {
    similarMovies: DetailMovieTypes[];
}

export default function SectionRecom(props: SectionRecomProps) {
  const { similarMovies } = props;

  return (
    <div className="section-recom px-4 px-sm-5 mt-5">
      <h5 className="fw-bold mb-3">Recommendation Movies</h5>
      <div className="scroll-wrapper pb-5">
        {similarMovies.map((similar: DetailMovieTypes) => {
          if (similar.backdrop_path !== null) {
            return (
              <MovieItem
                key={similar.id}
                id={similar.id}
                title={similar.title}
                release_date={similar.release_date}
                backdrop={similar.backdrop_path}
                rate={similar.vote_average}
                count={similar.vote_count}
                genres={similar.genres}
                type="backdrop"
              />
            );
          }
        })}
      </div>
    </div>
  );
}
