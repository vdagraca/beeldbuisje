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
  const [filteredTvShows, setFilteredTvShows] = useState<TvShow[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>("");

  useEffect(() => {
    getTvShows()
      .then(setTvShows)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setFilteredTvShows(tvShows);
    setGenres(getGenres(tvShows));
  }, [tvShows]);

  useEffect(() => {
    setFilteredTvShows(filterTvShows(tvShows, searchTerm, selectedGenre));
  }, [searchTerm, selectedGenre]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>TV Shows</h1>
      <SearchSection
        searchTerm={searchTerm}
        onChangeTextInput={setSearchTerm}
        genres={genres}
        onChangeSelect={setSelectedGenre}
        selectedGenre={selectedGenre}
      />
      <TvShowList tvShows={filteredTvShows} />
    </>
  );
}

function filterTvShows(shows: TvShow[], term: string, genre: string): TvShow[] {
  return shows
    .filter((show) => show.name.toLowerCase().includes(term.toLowerCase()))
    .filter(
      (show) =>
        genre === "all genres" ||
        show.genres.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
}

function getGenres(shows: TvShow[]): string[] {
  const genreSet = new Set<string>();
  shows.forEach((show) => {
    show.genres.forEach((genre) => genreSet.add(genre));
  });
  return Array.from(genreSet);
}

export default App;
