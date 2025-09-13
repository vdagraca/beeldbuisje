import { Box, CircularProgress } from "@mui/material";

export function Loader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50vh"
    >
      <CircularProgress color="primary" size={40} />
    </Box>
  );
}
