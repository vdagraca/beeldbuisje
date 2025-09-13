import { SearchSection } from "./SearchSection";
import { useFilteredTvShows } from "../hooks/useFilteredTvShows";
import { getGenres } from "../utils/getGenres";
import { Container } from "@mui/material";
import { ListWrapper } from "./ListWrapper";
import { Loader } from "./Loader";

export function Home() {
  const {
    tvShows,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedGenre,
    setSelectedGenre,
  } = useFilteredTvShows();

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container maxWidth="lg">
      <SearchSection
        searchTerm={searchTerm}
        onChangeTextInput={setSearchTerm}
        genres={getGenres(tvShows)}
        onChangeSelect={setSelectedGenre}
        selectedGenre={selectedGenre}
      />
      <ListWrapper tvShows={tvShows} />
    </Container>
  );
}
