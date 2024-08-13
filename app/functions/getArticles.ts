export type ArticleType = {
  id: number;
  title: string;
  img: string;
  cover: string;
  imgAlt: string;
  date: string;
  duration: string;
  episode: string;
  slug: string;
  url: string;
  content: {
    summary: string;
    section1: string;
    quote: [string, string];
    section2: string;
  }[];
};

export async function getArticles(): Promise<ArticleType[]> {
  // const res = await fetch(
  //   "https://raw.githubusercontent.com/glovebx/Fyrre-Magazine/main/json/articles.json?20240801", { signal: AbortSignal.timeout(30000) }
  // );
  const res = await fetch(
    "/json/articles", { signal: AbortSignal.timeout(30000) }
  );  
  if (!res.ok) {
    throw new Error("Failed to fetch article data");
  }

  return res.json();

  // const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/articles?${new Date()}`, {
  //     method: "POST",
  //     body: JSON.stringify({ }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  // const result = await res.json();

  // return result.data;
}
