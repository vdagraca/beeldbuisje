// tests/utils.tsx
import { render } from "@testing-library/react";
import { WatchListProvider } from "../state/watchListContext";
import { MemoryRouter } from "react-router-dom";

export function renderWithProviders(ui: React.ReactElement) {
  return render(
    <MemoryRouter>
      <WatchListProvider>{ui}</WatchListProvider>
    </MemoryRouter>
  );
}
