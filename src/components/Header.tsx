import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { useWatchListContext } from "../state/useWatchListContext";

type HeaderProps = {
  onOpenWatchList: () => void;
};

export function Header({ onOpenWatchList }: HeaderProps) {
  const { watchList } = useWatchListContext();
  return (
    <StyledHeader>
      <Box display="flex" alignItems="center" gap={2}>
        <Typography variant="h3" component="h1">
          Beeldbuisje
        </Typography>
        <Button
          variant="contained"
          color="primary"
          to="/"
          component={RouterLink}
        >
          Home
        </Button>
      </Box>
      <Button variant="contained" color="primary" onClick={onOpenWatchList}>
        Mijn Kijklijst ({watchList.length})
      </Button>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f5f5f5;
`;
