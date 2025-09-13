import { Box, Button } from "@mui/material";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

type HeaderProps = {
  onOpenWatchList: () => void;
};

export function Header({ onOpenWatchList }: HeaderProps) {
  return (
    <StyledHeader>
      <Box display="flex" alignItems="center" gap={2}>
        <h1>TV Shows</h1>
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
        Mijn Kijklijst
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
