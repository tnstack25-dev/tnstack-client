import { env } from "@/config/env";

export const siteConfig = {
  name: "TNStack",
  description:
    "Dịch vụ thiết kế website, quảng cáo đa nền tảng và SEO hướng đến hiệu quả kinh doanh.",
  url: env.NEXT_PUBLIC_SITE_URL,
  contact: {
    email: "support@tnstack.com",
    phone: "0931 696 302",
    zaloUrl: "https://zalo.me/0931696302",
  },
  navigation: [
    { title: "Trang Chủ", href: "/" },
    { title: "Dịch vụ", href: "/dich-vu" },
    { title: "Dự án", href: "/du-an" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Về chúng tôi", href: "/ve-chung-toi" },
    { title: "Tin Tức", href: "/tin-tuc" },
    { title: "Liên Hệ", href: "/lien-he" },
  ],
} as const;
