import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { WatchListProvider } from "./state/watchListContext";
import { ShowDetail } from "./components/ShowDetail";

function App() {
  return (
    <WatchListProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows/:id" element={<ShowDetail />} />
      </Routes>
    </WatchListProvider>
  );
}

export default App;
