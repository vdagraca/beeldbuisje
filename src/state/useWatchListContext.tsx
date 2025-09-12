import { useContext } from "react";
import { WatchListContext } from "./watchListContext";

export function useWatchListContext() {
  const watchListContext = useContext(WatchListContext);

  if (!watchListContext) {
    throw new Error(
      "useWatchListContext must be used within a WatchListProvider"
    );
  }

  return watchListContext;
}
