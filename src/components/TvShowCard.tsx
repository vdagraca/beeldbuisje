import { Button, Card, Typography } from "@mui/material";
import type { TvShow } from "../types/TvShow";

export function TvShowCard({ show }: { show: TvShow }) {
  return (
    <Card sx={{ width: "200px" }}>
      <Typography variant="h5">{show.name}</Typography>
      <Typography variant="body2">{show.summary}</Typography>
      <Typography variant="body2">Genres: {show.genres.join(", ")}</Typography>
      <Button variant="contained" color="primary">
        Kijklijst
      </Button>
    </Card>
  );
}
