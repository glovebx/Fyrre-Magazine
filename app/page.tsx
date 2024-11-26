import LatestArticles from "@/components/LatestArticles/LatestArticles";
import NewsLoading from "@/components/NewsTicker/loading";
import LatestProducts from "@/components/LatestProducts/LatestProducts";
import LatestPodcastsLoading from "@/components/LatestProducts/loading";
import NewsTicker from "@/components/NewsTicker/NewsTicker";
import PageTitle from "@/components/PageTitle";
import Subheading from "@/components/Subheading";
import { Suspense } from "react";

export const metadata = {
  // title: "Guluart | Jewelry & Art | 古鹿",
  title: "古鹿美学",
  description: "古鹿美学, 古鹿珠宝, Guluart, Jewelry, Articles and news from Guluart",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <PageTitle
        className="sr-only"
        imgSrc="/images/titles/Art&Life.svg"
        imgAlt="The words 'Art & Life' in bold uppercase lettering"
      >
        Art & Life
      </PageTitle>

      <Suspense fallback={<NewsLoading />}>
        <NewsTicker />
      </Suspense>

      <LatestArticles />

      <Subheading
        className="text-subheading"
        url="/products"
        linkText="All products"
      >
        Product
      </Subheading>

      <Suspense fallback={<LatestPodcastsLoading />}>
        <LatestProducts />
      </Suspense>

      {/* <Subheading
        className="text-subheading"
        url="/authors"
        linkText="All authors"
      >
        Authors
      </Subheading> */}

      {/* <Suspense fallback={<AuthorsLoading />}>
        <Authors />
      </Suspense> */}
    </main>
  );
}
