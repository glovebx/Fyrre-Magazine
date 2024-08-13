"use client";

import { useProductContext } from "@/hooks/useProductContext";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Products() {
  const { data } = useProductContext();
  const [selectedLabel, setSelectedLabel] = useState("All");

  const labels: string[] = [
    "All",
    ...new Set(
      data.flatMap((product) => product.products.map((item) => item.label))
    ),
  ];

  const filteredArticles = data.flatMap((article) =>
    article.products
      .filter((item) =>
        selectedLabel === "All" ? true : selectedLabel === item.label
      )
      .map((item) => ({
        ...item,
        author: article.author,
      }))
  );

  return (
    <div className="max-w-[95rem] w-full mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-2 md:gap-0 my-6">
        <p className="font-semibold uppercase">Categories</p>
        {data && (
          <div className="flex flex-wrap gap-2">
            {labels.map((label, index) => (
              <Button
                className={`px-3 py-2 bg-white text-black hover:bg-black hover:text-white border border-black rounded-full ${
                  label === selectedLabel
                    ? "bg-black text-white"
                    : "border-black"
                }`}
                key={index}
                onClick={() => setSelectedLabel(label)}
              >
                {label}
              </Button>
            ))}
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black border-collapse mb-48">
        {filteredArticles.map((articleData, index) => (
          <article className="border border-black p-8 flex flex-col relative" key={index}>
            <div className="flex items-center justify-between">
              <time dateTime={articleData.date}>{articleData.date}</time>
              <span className="px-3 py-2 border border-black rounded-full">
                <p className="uppercase">{articleData.label}</p>
              </span>
            </div>
            {/* <Link href={`magazine/${articleData.slug}`}> */}
            <Link href="#">
              <img
                className="w-full my-8 hover:scale-105 transition"
                src={articleData.img}
                alt={articleData.imgAlt}
              />
            </Link>
            <h2 className="heading3-title mb-3">
              <Link href="#">
                {articleData.title}
              </Link>
            </h2>
            <p className="mt-3 mb-12">{articleData.description}</p>
            <div className="flex flex-wrap gap-4 absolute bottom-0 mb-2">
              <span className="flex">
                <p className="font-semibold pr-2">Tags</p>
                {articleData.tags.map((tag, index) => (
                  <p className="pr-2" key={index}>{tag}</p>
                ))}
              </span>
              <span className="flex">
                <p className="font-semibold pr-2">RMO</p>
                {articleData.sources.map((source, index) => (
                  <p className="pr-2" key={index}>{source}</p>
                ))}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
