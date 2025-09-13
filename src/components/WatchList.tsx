import { Box, Drawer, Typography } from "@mui/material";
import { useWatchListContext } from "../state/useWatchListContext";
import TvShowCard from "./TvShowCard";

type WatchListProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function WatchList({ isOpen, onClose }: WatchListProps) {
  const { watchList } = useWatchListContext();

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box padding={2} width={300}>
        <Typography variant="h3">Watch List</Typography>
        <Box>
          {watchList.map((show) => (
            <Box marginBottom={2} key={show.id}>
              <TvShowCard show={show} hideButton={true} onClick={onClose} />
            </Box>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
}
