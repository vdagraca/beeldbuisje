import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { TvShow } from "../types/TvShow";

interface WatchListProviderProps {
  children: ReactNode;
}

interface WatchListContextType {
  updateWatchList: (show: TvShow) => void;
  watchList: TvShow[];
}

const WatchListContext = createContext<WatchListContextType | null>(null);

function getInitialState(): TvShow[] {
  const watchList = localStorage.getItem("watchList");
  return watchList ? JSON.parse(watchList) : [];
}

function WatchListProvider({ children }: WatchListProviderProps) {
  const [watchList, setWatchList] = useState<TvShow[]>(getInitialState());

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  function updateWatchList(show: TvShow) {
    const isInWatchList = watchList.some((l) => l.id === show.id);

    if (isInWatchList) {
      setWatchList(watchList.filter((l) => l.id !== show.id));
      return;
    }

    setWatchList([...watchList, show]);
  }

  const value: WatchListContextType = {
    updateWatchList,
    watchList,
  };

  return (
    <WatchListContext.Provider value={value}>
      {children}
    </WatchListContext.Provider>
  );
}

export { WatchListContext, WatchListProvider };
