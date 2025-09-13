import { TvShowList } from "./TvShowList";
import { SearchSection } from "./SearchSection";
import { useFilteredTvShows } from "../hooks/useFilteredTvShows";
import { getGenres } from "../utils/getGenres";

function Home() {
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

export default Home;
