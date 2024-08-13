import { Skeleton } from "@/components/ui/skeleton";
import ArticleCard from "./ArticleCard";

export default function Loading() {
  return (
    <div className="flex flex-col max-w-[95rem] w-full mx-auto py-12 md:py-48">
      <div>
        <ArticleCard />
        <Skeleton className="bg-[#a1a1a1] h-1 w-full my-6 rounded-none"></Skeleton>
        <ArticleCard />
        <Skeleton className="bg-[#a1a1a1] h-1 w-full my-6 rounded-none"></Skeleton>
        <ArticleCard />
        <Skeleton className="bg-[#a1a1a1] h-1 w-full my-6 rounded-none"></Skeleton>
        <ArticleCard />
        <Skeleton className="bg-[#a1a1a1] h-1 w-full my-6 rounded-none"></Skeleton>
        <ArticleCard />
      </div>
    </div>
  );
}
