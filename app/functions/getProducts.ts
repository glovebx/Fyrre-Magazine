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
  // // const res = await fetch(
  // //   "https://raw.githubusercontent.com/glovebx/Fyrre-Magazine/main/json/products.json?20240801", { signal: AbortSignal.timeout(30000) }
  // // );
  // const res = await fetch(
  //   "https://www.moco.co/wechat_mall/static/src/json/products.json?20240801", { signal: AbortSignal.timeout(30000) }
  // );

  // if (!res.ok) {
  //   throw new Error("Failed to fetch product data");
  // }

  // return res.json();

  const res = await fetch('/api/products', {
      method: "POST",
      body: JSON.stringify({ }),
      headers: {
        "Content-Type": "application/json",
      },
    });

  // console.log(res);  

  const result = await res.json();

  return result.data;
}
