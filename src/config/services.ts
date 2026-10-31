import {
  BadgeCheck,
  BadgeDollarSign,
  ChartNoAxesCombined,
  Check,
  Gem,
  Headphones,
  Layers,
  Megaphone,
  MessageCircle,
  Monitor,
  Rocket,
  SearchCheck,
  ServerCog,
  ShieldCheck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const servicesPageConfig = {
  verifiedStats: [] as Array<{ value: string; label: string }>,
  services: [
    {
      slug: "thiet-ke-website",
      href: "/dich-vu/thiet-ke-website",
      title: "Thiết kế website theo yêu cầu",
      description:
        "Thiết kế website hiện đại, chuẩn responsive, tối ưu trải nghiệm người dùng và phù hợp từng lĩnh vực kinh doanh.",
      icon: Monitor,
    },
    {
      slug: "toi-uu-website",
      href: "/dich-vu/toi-uu-website",
      title: "Tối ưu website — SEO & hiệu suất",
      description:
        "Cải thiện tốc độ tải trang, Core Web Vitals, cấu trúc kỹ thuật SEO và hiệu suất hoạt động.",
      icon: ChartNoAxesCombined,
    },
    {
      slug: "xu-ly-ma-doc",
      href: "/dich-vu/xu-ly-ma-doc",
      title: "Xử lý mã độc website",
      description:
        "Kiểm tra, phát hiện và xử lý mã độc, khắc phục lỗ hổng bảo mật và hỗ trợ khôi phục website.",
      icon: ShieldCheck,
    },
    {
      slug: "bao-tri-quan-tri-website",
      href: "/dich-vu/bao-tri-quan-tri-website",
      title: "Bảo trì & quản trị website",
      description:
        "Cập nhật, sao lưu, giám sát và xử lý sự cố định kỳ, giúp website vận hành ổn định.",
      icon: Layers,
    },
    {
      slug: "chay-ads-google",
      href: "/dich-vu/chay-google-ads",
      title: "Chạy Google Ads",
      description:
        "Tiếp cận khách hàng đang có nhu cầu bằng chiến dịch tìm kiếm, đo lường chuyển đổi và tối ưu hiệu quả.",
      icon: BadgeDollarSign,
    },
    {
      slug: "hosting-website",
      href: "/dich-vu/hosting-website",
      title: "Hosting website",
      description:
        "Hạ tầng lưu trữ phù hợp cho website doanh nghiệp, có phương án sao lưu, bảo mật và hỗ trợ kỹ thuật.",
      icon: ServerCog,
    },
    {
      slug: "chay-ads-facebook",
      href: "/dich-vu/chay-facebook-ads",
      title: "Chạy Facebook Ads",
      description:
        "Xây dựng chiến dịch theo hành trình khách hàng, kết hợp nội dung, tệp đối tượng và dữ liệu đo lường.",
      icon: Megaphone,
    },
    {
      slug: "dich-vu-website-khac",
      href: "/dich-vu/cac-dich-vu-khac",
      title: "Dịch vụ website khác",
      description: "Các hỗ trợ kỹ thuật linh hoạt theo hiện trạng website.",
      icon: Wrench,
      items: [
        "Khôi phục dữ liệu website",
        "Tích hợp công cụ marketing",
        "Tư vấn giải pháp website",
        "Hỗ trợ kỹ thuật",
      ],
    },
  ],
  benefits: [
    {
      title: "Uy tín & chuyên nghiệp",
      description: "Quy trình rõ ràng, chú trọng chất lượng triển khai.",
      icon: BadgeCheck,
    },
    {
      title: "Xử lý nhanh chóng",
      description: "Tiếp nhận và hỗ trợ xử lý sự cố theo mức độ ưu tiên.",
      icon: Zap,
    },
    {
      title: "Giải pháp phù hợp",
      description: "Tư vấn theo nhu cầu thực tế và ngân sách.",
      icon: Users,
    },
    {
      title: "Tối ưu hiệu quả",
      description: "Chú trọng tốc độ, bảo mật và trải nghiệm người dùng.",
      icon: Gem,
    },
    {
      title: "Hỗ trợ lâu dài",
      description: "Đồng hành trong quá trình vận hành và phát triển.",
      icon: Headphones,
    },
  ],
  process: [
    {
      title: "Tiếp nhận yêu cầu",
      description: "Tìm hiểu nhu cầu và mục tiêu của khách hàng.",
      icon: MessageCircle,
    },
    {
      title: "Phân tích & đề xuất",
      description: "Đưa ra giải pháp, phạm vi công việc và báo giá.",
      icon: SearchCheck,
    },
    {
      title: "Triển khai",
      description: "Thực hiện theo kế hoạch và cập nhật tiến độ.",
      icon: Rocket,
    },
    {
      title: "Kiểm tra & bàn giao",
      description: "Kiểm tra chất lượng, nghiệm thu và hướng dẫn sử dụng.",
      icon: Check,
    },
    {
      title: "Hỗ trợ sau dự án",
      description: "Hỗ trợ kỹ thuật và bảo trì theo chính sách thống nhất.",
      icon: Headphones,
    },
  ],
} as const;
