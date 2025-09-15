export interface Movie {
  id: number;
  title: string;
  releaseYear: number;
  genres: string[];
  runtime: number;
  posterUrl: string;
  backdropUrl: string;
  plot: string;
  status: string;
  tmdbRating: number;
  language: string;
}