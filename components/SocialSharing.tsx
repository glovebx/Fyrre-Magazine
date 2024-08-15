import Link from "next/link";
import WeixinDialog from "@/components/WeixinDialog"

export type SocialMediaLink = {
  href: string;
  ariaLabel: string;
  src: string;
  alt: string;
};

type SocialSharingProps = {
  links: SocialMediaLink[];
  showWeixinIcon?: boolean;
};

export default function SocialSharing({ links, showWeixinIcon=true }: SocialSharingProps) {
  return (
    <div className="flex gap-3">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          aria-label={link.ariaLabel}
          target="_blank"
        >
          <img className="h-full w-fit" src={link.src} alt={link.alt} />
        </Link>
      ))}
      {showWeixinIcon && <WeixinDialog icon="/icons/ri_weixin-fill.svg"/>}
    </div>
  );
}
