import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useFilteredTvShows } from "../hooks/useFilteredTvShows";
import styled from "styled-components";

export function TvShowDetail() {
  const { id } = useParams<{ id: string }>();
  const { tvShows } = useFilteredTvShows();

  const showDetail = tvShows.find((s) => s.id === Number(id));
  if (!showDetail) return <Typography>Show not found</Typography>;

  return (
    <Container>
      <Box marginRight={2}>
        <Typography variant="h4">{showDetail.name}</Typography>
        <Typography
          dangerouslySetInnerHTML={{ __html: showDetail.summary || "" }}
        />
        <Typography>Genres: {showDetail.genres.join(", ")}</Typography>
        <Typography>Rating: {showDetail.rating?.average || "N/A"}</Typography>
        <Typography>Language: {showDetail.language}</Typography>
        <Typography>Premiered: {showDetail.premiered}</Typography>
        <Typography>
          Official Site:
          {showDetail.officialSite ? (
            <a
              href={showDetail.officialSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {showDetail.officialSite}
            </a>
          ) : (
            "N/A"
          )}
        </Typography>
      </Box>
      <img src={showDetail.image?.original} alt={showDetail.name} />
    </Container>
  );
}

const Container = styled(Box)`
  display: flex;
  height: calc(100vh - 112px);
  padding: 16px;
`;
