import { useEffect, useState } from "react";
import type { TvShow } from "../types/TvShow";
import { getTvShows } from "../services/getTvShows";

export function useTvShows() {
  const [tvShows, setTvShows] = useState<TvShow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTvShows()
      .then(setTvShows)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { tvShows, loading, error };
}
