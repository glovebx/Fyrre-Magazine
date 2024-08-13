"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import news from "@/json/news.json";

export default function NewsTicker() {
  const newsText = useRef<HTMLDivElement | null>(null);
  const newsContainer = useRef<HTMLDivElement | null>(null);
  // let xPercent = 0;
  const animationDuration = 20;

  useEffect(() => {
    const ticker = newsText.current;

    if (ticker) {
      const tickerWidth = ticker.offsetWidth;

      const xPercent = newsContainer.current?.offsetWidth ?? 0;
      console.log(xPercent);

      gsap.set(ticker, { x: xPercent });

      const animation = gsap.to(ticker, {
        x: -tickerWidth,
        duration: animationDuration,
        ease: "none",
        repeat: -1,
        // yoyo: true, // 动画反向播放
        onRepeat: () => {
          gsap.set(ticker, { x: xPercent });
        },
      });

      return () => {
        animation.kill();
      };
    }
  }, []);

  return (
    <div ref={newsContainer} className="flex bg-black text-white py-5 max-w-[95rem] w-full mx-auto relative overflow-hidden">
      <div className="bg-black z-10 px-6">
        <span className="flex gap-2 bg-black font-semibold uppercase whitespace-nowrap">
          <p>News</p>
          <p className="block sm:hidden">+++</p>
          <p className="hidden sm:block">Ticker +++</p>
        </span>
      </div>
      <div ref={newsText} className="flex gap-4 sliding-ticker relative">
        {news.map((newsItem, index) => (
          <div
            key={index}
            className={`whitespace-nowrap ${
              index === news.length - 1 ? "overflow-visible" : "overflow-hidden"
            }`}
            style={{ right: index === news.length - 1 ? "0" : "" }}
          >
            <p>{newsItem}+++</p>
          </div>
        ))}
      </div>
    </div>
  );
}
