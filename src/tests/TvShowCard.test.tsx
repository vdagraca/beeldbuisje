import { fireEvent, screen } from "@testing-library/react";
import TvShowCard from "../components/TvShowCard";
import { mockTvShows } from "./mocks";
import { renderWithProviders } from "./renderWithProviders";
import { vi } from "vitest";
import * as useWatchListModule from "../state/useWatchListContext";
import type { Mock } from "vitest";
// ...existing code...

const show = mockTvShows[0];

describe("TvShowCard", () => {
  const updateWatchList = vi.fn();

  it("renders show info and button", () => {
    (useWatchListModule.useWatchListContext as Mock).mockRestore?.();
    renderWithProviders(<TvShowCard show={show} />);
    expect(screen.getByText(show.genres.join(" | "))).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /kijklijst/i })
    ).toBeInTheDocument();
  });

  it("calls updateWatchList on button click", () => {
    vi.spyOn(useWatchListModule, "useWatchListContext").mockReturnValue({
      updateWatchList,
      watchList: [],
    });
    renderWithProviders(<TvShowCard show={show} />);

    fireEvent.click(screen.getByRole("button", { name: /kijklijst/i }));
    expect(updateWatchList).toHaveBeenCalledWith(show);
    vi.restoreAllMocks();
  });

  it("shows 'contained' button if show is in watchlist", () => {
    vi.spyOn(useWatchListModule, "useWatchListContext").mockReturnValue({
      updateWatchList,
      watchList: [show],
    });
    renderWithProviders(<TvShowCard show={show} />);
    const button = screen.getByRole("button", { name: /kijklijst/i });
    expect(button).toHaveClass("MuiButton-contained");
  });

  it("does not render button if hideButton is true", () => {
    vi.spyOn(useWatchListModule, "useWatchListContext").mockReturnValue({
      updateWatchList,
      watchList: [],
    });
    renderWithProviders(<TvShowCard show={show} hideButton={true} />);
    expect(screen.queryByRole("button", { name: /kijklijst/i })).toBeNull();
  });

  it("calls onClick when card is clicked", () => {
    vi.spyOn(useWatchListModule, "useWatchListContext").mockReturnValue({
      updateWatchList,
      watchList: [],
    });
    const onClick = vi.fn();
    renderWithProviders(<TvShowCard show={show} onClick={onClick} />);
    fireEvent.click(screen.getByText(show.genres.join(" | ")));
    expect(onClick).toHaveBeenCalled();
  });
});
