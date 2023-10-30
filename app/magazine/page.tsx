import ArticleFilterButtons from "@/components/ArticleFilterButtons";
import Articles from "@/components/Articles";
import PageTitle from "@/components/PageTitle";

export default function MagazinePage() {
  return (
    <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 md:pt-8 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <PageTitle className="sr-only" imgSrc="/images/titles/Magazine.svg">
        Magazine
      </PageTitle>
      {/*  <div className="flex justify-between items-center my-6">
        <p className="font-semibold uppercase">Categories</p>
        <ArticleFilterButtons />
      </div> */}
      <Articles />
    </main>
  );
}
