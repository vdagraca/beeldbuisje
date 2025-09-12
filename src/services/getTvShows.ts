export async function getTvShows() {
  // TV Maze API Example
  const result = await fetch("/api/shows", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!result.ok) {
    throw new Error(`API error: ${result.status} ${result.statusText}`);
  }

  return result.json();
}
