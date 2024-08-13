export async function getNews(): Promise<string[]> {
  const res = await fetch(
    "https://raw.githubusercontent.com/glovebx/Fyrre-Magazine/main/json/news.json?20240801", { signal: AbortSignal.timeout(30000) }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news data");
  }

  return res.json();

  // const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/news`, {
  //   method: "POST",
  //   body: JSON.stringify({ }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // if (!res.ok) {
  //   throw new Error("Failed to fetch news data");
  // }

  // const result = await res.json();

  // return result.data;
}
