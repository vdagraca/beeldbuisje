import { renderHook, act } from "@testing-library/react";
import { useFilteredTvShows } from "../hooks/useFilteredTvShows";
import * as useTvShowsModule from "../hooks/useTvShows";
import { mockTvShows } from "./mocks";
import { vi, type Mock } from "vitest";

vi.mock("../hooks/useTvShows", () => ({
  useTvShows: vi.fn(),
}));

describe("useFilteredTvShows", () => {
  beforeEach(() => {
    (useTvShowsModule.useTvShows as Mock).mockReturnValue({
      tvShows: mockTvShows,
      loading: false,
      error: null,
    });
  });

  it("returns all shows by default", () => {
    const { result } = renderHook(() => useFilteredTvShows());
    expect(result.current.tvShows).toHaveLength(5);
  });

  it("filters by search term", () => {
    const { result } = renderHook(() => useFilteredTvShows());
    act(() => {
      result.current.setSearchTerm("break");
    });
    expect(result.current.tvShows).toHaveLength(1);
    expect(result.current.tvShows[0].name).toBe("Breaking Bad");
  });

  it("filters by genre", () => {
    const { result } = renderHook(() => useFilteredTvShows());
    act(() => {
      result.current.setSelectedGenre("Comedy");
    });
    expect(result.current.tvShows).toHaveLength(3);
    expect(result.current.tvShows[0].name).toBe("Friends");
  });

  it("filters by search term and genre", () => {
    const { result } = renderHook(() => useFilteredTvShows());
    act(() => {
      result.current.setSearchTerm("br");
    });
    expect(result.current.tvShows).toHaveLength(2);
    act(() => {
      result.current.setSelectedGenre("Crime");
    });
    expect(result.current.tvShows).toHaveLength(2);
    act(() => {
      result.current.setSelectedGenre("Comedy");
    });
    expect(result.current.tvShows).toHaveLength(1);
  });

  it("returns empty when no match", () => {
    const { result } = renderHook(() => useFilteredTvShows());
    act(() => {
      result.current.setSearchTerm("xyz");
    });
    expect(result.current.tvShows).toHaveLength(0);
  });
});
