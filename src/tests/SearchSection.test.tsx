import { render, screen, fireEvent } from "@testing-library/react";
import { SearchSection } from "../components/SearchSection";
import { vi } from "vitest";

describe("SearchSection", () => {
  it("renders input and genre select and calls handlers", () => {
    const onChangeTextField = vi.fn();
    const onChangeSelect = vi.fn();
    render(
      <SearchSection
        searchTerm=""
        onChangeTextInput={onChangeTextField}
        genres={["Drama", "Comedy"]}
        onChangeSelect={onChangeSelect}
        selectedGenre="all genres"
      />
    );
    // Input present
    const input = screen.getByLabelText(/search tv shows/i);
    expect(input).toBeInTheDocument();
    // Select present
    const select = screen.getByLabelText("Genre");
    expect(select).toBeInTheDocument();
    // Change input
    fireEvent.change(input, { target: { value: "Breaking" } });
    expect(onChangeTextField).toHaveBeenCalledWith("Breaking");
    // Open select and choose genre
    fireEvent.mouseDown(select);
    const comedyOption = screen.getByText("Comedy");
    fireEvent.click(comedyOption);
    expect(onChangeSelect).toHaveBeenCalledWith("Comedy");
  });
});
