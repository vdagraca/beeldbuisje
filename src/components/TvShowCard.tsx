import { Box, Button, Typography } from "@mui/material";
import type { TvShow } from "../types/TvShow";
import { useWatchListContext } from "../state/useWatchListContext";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function TvShowCard({ show }: { show: TvShow }) {
  const { updateWatchList, watchList } = useWatchListContext();

  return (
    <Link
      to={`/shows/${show.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <StyledCard>
        <StyledCardImage
          src={show.image?.original}
          alt={show.name}
          loading="lazy"
        />
        <StyledContent>
          <Typography variant="body2">
            Genres: {show.genres.join(", ")}
          </Typography>
          <Button
            variant={
              watchList.some((s) => s.id === show.id) ? "contained" : "outlined"
            }
            color="primary"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              updateWatchList(show);
            }}
          >
            Kijklijst
          </Button>
        </StyledContent>
      </StyledCard>
    </Link>
  );
}

const StyledCard = styled(Box)`
  height: 300px;
  position: relative;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 8px;
`;

const StyledCardImage = styled.img`
  display: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

const StyledContent = styled(Box)`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  padding: 8px;
  margin-top: 200px;
`;
