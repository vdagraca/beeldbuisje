import { Button, Typography } from "@mui/material";
import type { TvShow } from "../types/TvShow";
import { useWatchListContext } from "../state/useWatchListContext";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export function TvShowCard({ show }: { show: TvShow }) {
  const { updateWatchList, watchList } = useWatchListContext();
  // const navigate = useNavigate();

  return (
    <Link
      to={`/shows/${show.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <StyledCard>
        <Typography variant="h5">{show.name}</Typography>
        <img src={show.image?.medium} alt={show.name} />
        <Typography variant="body2">{show.summary}</Typography>
        <Typography variant="body2">
          Genres: {show.genres.join(", ")}
        </Typography>
        <Button
          variant={
            watchList.some((s) => s.id === show.id) ? "contained" : "outlined"
          }
          color="primary"
          onClick={() => updateWatchList(show)}
        >
          Kijklijst
        </Button>
      </StyledCard>
    </Link>
  );
}

const StyledCard = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
