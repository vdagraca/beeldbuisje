import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { WatchListProvider } from "./state/watchListContext";
import { TvShowDetail } from "./components/TvShowDetail";
import { Header } from "./components/Header";
import { useState } from "react";
import { WatchList } from "./components/WatchList";

function App() {
  const [isWatchListOpen, setIsWatchListOpen] = useState(false);

  return (
    <WatchListProvider>
      <Header onOpenWatchList={() => setIsWatchListOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows/:id" element={<TvShowDetail />} />
      </Routes>
      {isWatchListOpen && (
        <WatchList
          isOpen={isWatchListOpen}
          onClose={() => setIsWatchListOpen(false)}
        />
      )}
    </WatchListProvider>
  );
}

export default App;
