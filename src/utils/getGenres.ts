import type { TvShow } from "../types/TvShow";

export function getGenres(shows: TvShow[]): string[] {
  const genreSet = new Set<string>();
  shows.forEach((show) => {
    show.genres.forEach((genre) => genreSet.add(genre));
  });
  return Array.from(genreSet);
}
