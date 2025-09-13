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
          <Typography variant="body2">{show.genres.join(" | ")}</Typography>
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
  height: 400px;
  width: 200px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 8px;
`;

const StyledCardImage = styled.img`
  height: 300px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const StyledContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 90px;
  padding: 8px;
`;
