import { useEffect, useState } from "react";
import type { TvShow } from "./types/TvShow";
import { TvShowList } from "./components/TvShowList";
import { SearchSection } from "./components/SearchSection";
import { useTvShows } from "./hooks/useTvShows";

function App() {
  const { tvShows, loading, error } = useTvShows();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTvShows, setFilteredTvShows] = useState<TvShow[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>("");

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
