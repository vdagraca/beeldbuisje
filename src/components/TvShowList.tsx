import { Box } from "@mui/material";
import type { TvShow } from "../types/TvShow";
import styled from "styled-components";
import TvShowCard from "./TvShowCard";

export default function TvShowList({ tvShows }: { tvShows: TvShow[] }) {
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
