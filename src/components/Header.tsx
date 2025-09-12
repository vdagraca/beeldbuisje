import { Button } from "@mui/material";
import styled from "styled-components";

type HeaderProps = {
  onOpenWatchList: () => void;
};

export function Header({ onOpenWatchList }: HeaderProps) {
  return (
    <StyledHeader>
      <h1>TV Shows</h1>
      <Button variant="contained" color="primary" onClick={onOpenWatchList}>
        Kijklijst
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
