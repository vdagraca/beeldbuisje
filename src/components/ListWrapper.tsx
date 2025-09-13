import { lazy, Suspense } from "react";
import { Loader } from "./Loader";

const TvShowList = lazy(() => import("./TvShowList"));

type ListWrapperProps = React.ComponentProps<typeof TvShowList>;

export function ListWrapper({ tvShows }: ListWrapperProps) {
  return (
    <Suspense fallback={<Loader />}>
      <TvShowList tvShows={tvShows} />
    </Suspense>
  );
}
