import { screen } from "@testing-library/react";
import { useWatchListContext } from "../state/useWatchListContext";
import { act } from "@testing-library/react";
import { mockTvShows } from "./mocks";
import { renderWithProviders } from "./renderWithProviders";

describe("useWatchListContext", () => {
  function TestComponent() {
    const { watchList, updateWatchList } = useWatchListContext();
    return (
      <div>
        <span data-testid="count">{watchList.length}</span>
        <button onClick={() => updateWatchList(mockTvShows[0])}>Add</button>
      </div>
    );
  }

  it("adds and removes shows from watchlist", () => {
    renderWithProviders(<TestComponent />);
    const count = screen.getByTestId("count");
    const button = screen.getByText("Add");
    expect(count.textContent).toBe("0");
    act(() => {
      button.click();
    });
    expect(count.textContent).toBe("1");
    act(() => {
      button.click();
    });
    expect(count.textContent).toBe("0");
  });
});
