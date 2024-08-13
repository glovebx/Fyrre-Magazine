import Link from "next/link";
import { getProducts } from "@/app/functions/getProducts";
import Image from "next/image";

export default async function LatestProducts() {
  const data = await getProducts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 max-w-[95rem] w-full mx-auto border border-black border-collapse">
      {data
        .map((product) => (
          <article className="border border-black p-4 md:p-10" key={product.id}>
            {/* <Link href={`/podcasts/${podcast.slug}`}> */}
            <Link href={product.products[0].slug} target="_blank">
              <div className="relative w-full h-96">
                <Image
                  className="hover:scale-105 transition absolute bottom-0 right-0 h-96"
                  src={product.products[0].img}
                  alt={product.products[0].imgAlt}
                  width={900}
                  height={900}
                  layout="fixed" // 固定尺寸
                  objectFit="cover" // 裁剪方式，覆盖整个区域                
                />
              </div>
            </Link>
            <h2 className="heading3-title mt-8 mb-12">
              <Link href={product.products[0].slug} target="_blank">{product.products[0].title}</Link>
            </h2>
            <div className="flex flex-wrap gap-4">
              <span className="flex">
                <p className="font-semibold pr-2">Date</p>
                <time dateTime={product.products[0].date}>{product.products[0].date}</time>
              </span>
              <span className="flex">
                <p className="font-semibold pr-2">Tag</p>
                <p>{product.products[0].label}</p>
              </span>
            </div>
          </article>
        ))
        .slice(0, 3)}
    </div>
  );
}
