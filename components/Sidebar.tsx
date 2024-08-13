import Image from "next/image";
import NewsletterSignUp from "./NewsletterSignUp";
import PopularArticles from "./PopularArticles";
import { Button } from "./ui/button";
import magazineCover from "@/public/images/homepage/magazine-cover.png";

export default function Sidebar() {
  return (
    <aside>
      <h3 className="uppercase font-semibold mb-2">Piece of Week</h3>
      <p className="text-5xl font-semibold">2024年8月</p>
      <Image
        className="w-[20rem] pt-8 pb-4"
        src={magazineCover}
        alt="Piece of Week"
      />
      <Button disabled>Order</Button>
      <PopularArticles />
      <div className="bg-[#f8f8f8] p-[1.88rem] mt-16">
        <h3 className="uppercase font-semibold mb-2">Newsletter</h3>
        <p className="heading3-title mb-4">Guluart News to your Inbox</p>
        <NewsletterSignUp />
      </div>
    </aside>
  );
}
