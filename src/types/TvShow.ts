export interface TvShow {
  id: number;
  name: string;
  language: string;
  genres: string[];
  rating: { average: number | null };
  premiered: string | null;
  officialSite: string | null;
  image: { medium: string; original: string } | null;
  summary: string;
}
