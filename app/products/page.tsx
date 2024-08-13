import Products from "@/components/Products/Products";
import Loading from "@/components/Products/loading";
import PageTitle from "@/components/PageTitle";
import { Suspense } from "react";

export const metadata = {
  title: "Products  | Guluart",
  description: "Products from our workshop",
};

export default function ProductPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <PageTitle
        className="sr-only"
        imgSrc="/images/titles/Product.svg"
        imgAlt="The word 'Product' in bold, uppercase lettering"
      >
        Article
      </PageTitle>
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </main>
  );
}
