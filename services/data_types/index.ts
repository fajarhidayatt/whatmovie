export interface CategoryTypes {
    id: number;
    name: string;
}

export interface DetailMovieTypes {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    runtime: number;
    status: string;
    overview: string;
    genres: CategoryTypes[];
}
