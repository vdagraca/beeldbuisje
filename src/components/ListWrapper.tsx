import { Box, CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";

const TvShowList = lazy(() => import("./TvShowList"));

type ListWrapperProps = React.ComponentProps<typeof TvShowList>;

export function ListWrapper({ tvShows }: ListWrapperProps) {
  return (
    <Suspense
      fallback={
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh"
        >
          <CircularProgress color="primary" size={40} />
        </Box>
      }
    >
      <TvShowList tvShows={tvShows} />
    </Suspense>
  );
}
