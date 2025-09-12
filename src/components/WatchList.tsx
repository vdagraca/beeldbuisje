import { Box, Drawer, Typography } from "@mui/material";
import { useWatchListContext } from "../state/useWatchListContext";

type WatchListProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function WatchList({ isOpen, onClose }: WatchListProps) {
  const { watchList } = useWatchListContext();

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Typography variant="h3">Watch List</Typography>
      <Box>
        {watchList.map((show) => (
          <Box key={show.id}>
            <Typography>{show.name}</Typography>
          </Box>
        ))}
      </Box>
    </Drawer>
  );
}
