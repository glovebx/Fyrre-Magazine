"use client";

import { useArticleContext } from "@/hooks/useArticleContext";
import Sidebar from "./Sidebar";
import { Separator } from "@radix-ui/react-separator";

export default function LatestArticles() {
  const { data } = useArticleContext();

  if (data.length > 0 && data[0].articles.length > 0) {
    const allArticles = data[0].articles.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

    const latestArticle = allArticles[0];

    const remainingArticles = allArticles.slice(1);

    return (
      <div>
        <div className="flex flex-col gap-12 py-10 max-w-[95rem] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div key={latestArticle.title}>
              <h2 className="text-subtitle">{latestArticle.title}</h2>
            </div>
            <div>
              <p>{latestArticle.description}</p>
              <p>Author: {data[0].author}</p>
            </div>
          </div>
          <div>
            <img
              className="w-full object-cover"
              src={latestArticle.content[0].img}
              alt={latestArticle.title}
            />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-24">
          <div className="w-3/4">
            {remainingArticles.map((article, index) => (
              <div key={article.title}>
                <div className="grid md:grid-cols-[0fr_1fr] gap-12">
                  <div className="h-60 w-60">
                    <img
                      className="w-full h-full object-cover"
                      src={article.img}
                      alt={article.title}
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="heading3-title mb-3">{article.title}</h3>
                      <p>{article.description}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-6">
                        <span className="flex">
                          <p className="font-semibold pr-2">Text</p>
                          <p>{data[0].author}</p>
                        </span>
                        <span className="flex">
                          <p className="font-semibold pr-2">Date</p>
                          <p>{article.date}</p>
                        </span>
                        <span className="flex">
                          <p className="font-semibold pr-2">Read</p>
                          <p>{article.read}</p>
                        </span>
                      </div>
                      <span className="px-3 py-2 border border-black rounded-full">
                        <p className="uppercase">{article.label}</p>
                      </span>
                    </div>
                  </div>
                </div>
                {index < remainingArticles.length - 1 && (
                  <Separator className="border border-black my-6" />
                )}
              </div>
            ))}
          </div>
          <div className="w-1/4">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>No articles available</p>
      </div>
    );
  }
}
