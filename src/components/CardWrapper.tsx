import { lazy, Suspense } from "react";

const TvShowCard = lazy(() => import("./TvShowCard"));

type CardWrapperProps = React.ComponentProps<typeof TvShowCard>;

export function CardWrapper(props: CardWrapperProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TvShowCard {...props} />
    </Suspense>
  );
}
