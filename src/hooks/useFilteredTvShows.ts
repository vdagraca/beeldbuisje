import { useMemo, useState } from "react";
import { useTvShows } from "./useTvShows";

export function useFilteredTvShows() {
  const { tvShows, loading, error } = useTvShows();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all genres");

  const filteredTvShows = useMemo(() => {
    return tvShows
      .filter((show) =>
        show.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(
        (show) =>
          selectedGenre === "all genres" ||
          show.genres.some(
            (g) => g.toLowerCase() === selectedGenre.toLowerCase()
          )
      );
  }, [tvShows, searchTerm, selectedGenre]);

  return {
    tvShows: filteredTvShows,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedGenre,
    setSelectedGenre,
  };
}
