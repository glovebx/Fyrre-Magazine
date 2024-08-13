export type ProductType = {
  id: number;
  author: string;
  job: string;
  city: string;
  avatar: string;
  imgAlt: string;
  slug: string;
  products: Array<{
    title: string;
    popular: boolean;
    popularity: number;
    description: string;
    date: string;
    read: string;
    label: string;
    img: string;
    imgAlt: string;
    slug: string;
    tags: Array<string>;
    sources: Array<string>;
    content: Array<{
      img: string;
      summary: string;
      section1: string;
      quote: Array<string>;
      summary2: string;
      section2: string;
    }>;
  }>;
};

export async function getProducts(): Promise<ProductType[]> {
  // const res = await fetch(
  //   "https://raw.githubusercontent.com/glovebx/Fyrre-Magazine/main/json/articles.json", { signal: AbortSignal.timeout(10000) }
  // );

  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products?${new Date()}`, {
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
