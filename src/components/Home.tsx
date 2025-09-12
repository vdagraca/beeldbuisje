import { TvShowList } from "./TvShowList";
import { SearchSection } from "./SearchSection";
import { useFilteredTvShows } from "../hooks/useFilteredTvShows";
import { getGenres } from "../utils/getGenres";
import { Header } from "./Header";
import { useState } from "react";
import { WatchList } from "./WatchList";

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

  const [isWatchListOpen, setIsWatchListOpen] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header onOpenWatchList={() => setIsWatchListOpen(true)} />
      <SearchSection
        searchTerm={searchTerm}
        onChangeTextInput={setSearchTerm}
        genres={getGenres(tvShows)}
        onChangeSelect={setSelectedGenre}
        selectedGenre={selectedGenre}
      />
      <TvShowList tvShows={tvShows} />
      {isWatchListOpen && (
        <WatchList
          isOpen={isWatchListOpen}
          onClose={() => setIsWatchListOpen(false)}
        />
      )}
    </>
  );
}

export default Home;
