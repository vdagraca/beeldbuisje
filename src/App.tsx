import { useEffect, useState } from "react";
import { getTvShows } from "./services/getTvShows";
import type { TvShow } from "./types/TvShow";

function App() {
  const [tvShows, setTvShows] = useState<TvShow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTvShows()
      .then(setTvShows)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>TV Shows</h1>
      <ul>
        {tvShows.map((show) => (
          <li key={show.id}>{show.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
