import { useEffect, useState } from "react";
import { getTvShows } from "./services/getTvShows";
import type { TvShow } from "./types/TvShow";
import { TvShowList } from "./components/TvShowList";
import { SearchSection } from "./components/SearchSection";

function App() {
  const [tvShows, setTvShows] = useState<TvShow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getTvShows()
      .then(setTvShows)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setTvShows((shows) => filterTvShows(shows, searchTerm));
  }, [searchTerm]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>TV Shows</h1>
      <SearchSection searchTerm={searchTerm} onChange={setSearchTerm} />
      <TvShowList tvShows={tvShows} />
    </>
  );
}

function filterTvShows(shows: TvShow[], term: string): TvShow[] {
  return shows.filter((show) =>
    show.name.toLowerCase().includes(term.toLowerCase())
  );
}

export default App;
