import { TvShowList } from "./components/TvShowList";
import { SearchSection } from "./components/SearchSection";
import { useFilteredTvShows } from "./hooks/useFilteredTvShows";
import { getGenres } from "./utils/getGenres";

function App() {
  const {
    tvShows,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedGenre,
    setSelectedGenre,
  } = useFilteredTvShows();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>TV Shows</h1>
      <SearchSection
        searchTerm={searchTerm}
        onChangeTextInput={setSearchTerm}
        genres={getGenres(tvShows)}
        onChangeSelect={setSelectedGenre}
        selectedGenre={selectedGenre}
      />
      <TvShowList tvShows={tvShows} />
    </>
  );
}

export default App;
