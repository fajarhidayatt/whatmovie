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
    original_language: string;
    popularity: number;
    budget: number;
    revenue: number;
    genres: CategoryTypes[];
}

export interface CrewCastTypes {
    credit_id: string;
    name: string;
    original_name: string;
    job: string;
    profile_path: string;
}

export interface CreditsTypes {
    cast: CrewCastTypes[];
    crew: CrewCastTypes[];
}
