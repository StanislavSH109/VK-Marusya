export interface Movie {
  id: number;
  title: string;
  releaseYear: number;
  genres: string[];
  runtime: number;
  posterUrl: string;
  plot: string;
  status: string;
}