import { Box } from "@mui/material";
import type { TvShow } from "../types/TvShow";
import { TvShowCard } from "./TvShowCard";
import styled from "styled-components";

export function TvShowList({ tvShows }: { tvShows: TvShow[] }) {
  return (
    <StyledTvShowList>
      {tvShows.map((show) => (
        <TvShowCard show={show} key={show.id} />
      ))}
    </StyledTvShowList>
  );
}

const StyledTvShowList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 16px;
  padding: 16px;
`;
