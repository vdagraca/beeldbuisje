import { CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";

const TvShowCard = lazy(() => import("./TvShowCard"));

type CardWrapperProps = React.ComponentProps<typeof TvShowCard>;

export function CardWrapper(props: CardWrapperProps) {
  return (
    <Suspense fallback={<CircularProgress color="primary" size={40} />}>
      <TvShowCard {...props} />
    </Suspense>
  );
}
