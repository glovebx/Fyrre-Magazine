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
  //   "https://raw.githubusercontent.com/glovebx/Fyrre-Magazine/main/json/articles.json", { signal: AbortSignal.timeout(10000) }
  // );

  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/articles?${new Date()}`, {
      method: "POST",
      body: JSON.stringify({ }),
      headers: {
        "Content-Type": "application/json",
      },
    });

  // console.log(res);  

  // if (!res.ok) {
  //   throw new Error("Failed to fetch article data");
  // }
  const result = await res.json();

  return result.data;
}
