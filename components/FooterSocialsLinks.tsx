import Link from "next/link";
import WeixinDialog from "@/components/WeixinDialog"

type SocialMediaLink = {
  href: string;
  ariaLabel: string;
  src: string;
  alt: string;
};

const FooterSocialMediaLinks: SocialMediaLink[] = [
  {
    href: "https://www.weibo.com/u/6358821166",
    ariaLabel: "Visit our Weibo page",
    src: "/icons/ri_weibo-fill-white.svg",
    alt: "Weibo logo",
  },
  // {
  //   href: "#",
  //   ariaLabel: "Visit our MP page",
  //   src: "/icons/ri_weixin-fill-white.svg",
  //   alt: "Weixin logo",
  // },
  // {
  //   href: "#",
  //   ariaLabel: "Visit our YouTube page",
  //   src: "/icons/ri_youtube-fill-white.svg",
  //   alt: "YouTube logo",
  // },
  // {
  //   href: "#",
  //   ariaLabel: "Visit our RSS Feed",
  //   src: "/icons/ri_rss-fill-white.svg",
  //   alt: "RSS Feed logo",
  // },
];

export default function FooterSocialLinks() {
  return (
    <div className="flex gap-3">
      {FooterSocialMediaLinks.map((link, index) => (
        <Link key={index} href={link.href} target="_blank" rel="noreferrer noopener">
          <img className="h-full w-fit" src={link.src} alt={link.alt} />
        </Link>
      ))}
      <WeixinDialog icon="/icons/ri_weixin-fill-white.svg"/>
    </div>
  );
}
