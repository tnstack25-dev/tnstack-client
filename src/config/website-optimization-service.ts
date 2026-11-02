import {
  Activity,
  ChartNoAxesCombined,
  CodeXml,
  Gauge,
  Image,
  MonitorSmartphone,
  Search,
  ServerCog,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const websiteOptimizationService = {
  benefits: [
    {
      title: "Tăng tốc độ tải trang",
      description: "Giảm thời gian chờ và hạn chế khách hàng rời trang.",
      icon: Gauge,
    },
    {
      title: "Chuẩn SEO kỹ thuật",
      description: "Cải thiện khả năng crawl, index và cấu trúc.",
      icon: Search,
    },
    {
      title: "Cải thiện thứ hạng",
      description: "Hỗ trợ nền tảng SEO, không cam kết vị trí.",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Hiệu suất bền vững",
      description: "Ổn định, dễ theo dõi và tiếp tục cải thiện.",
      icon: Activity,
    },
  ],
  valueCards: [
    {
      title: "Tải trang nhanh hơn",
      description:
        "Giảm thời gian chờ, tăng trải nghiệm và hạn chế khách hàng rời trang.",
      icon: Gauge,
    },
    {
      title: "Thân thiện với Google",
      description:
        "Cải thiện khả năng thu thập dữ liệu, lập chỉ mục và nền tảng SEO kỹ thuật.",
      icon: Search,
    },
    {
      title: "Trải nghiệm tốt hơn",
      description: "Hiển thị mượt mà trên mọi thiết bị, thao tác dễ dàng.",
      icon: MonitorSmartphone,
    },
    {
      title: "Hỗ trợ tăng tỷ lệ chuyển đổi",
      description: "Giảm trở ngại trong hành trình mua hàng và gửi yêu cầu.",
      icon: Sparkles,
    },
    {
      title: "Giảm rủi ro bảo mật",
      description:
        "Rà soát cấu hình, cập nhật hệ thống và hạn chế lỗ hổng phổ biến.",
      icon: ShieldCheck,
    },
    {
      title: "Tiết kiệm chi phí lâu dài",
      description:
        "Tối ưu tài nguyên, giảm tải máy chủ và cải thiện tính ổn định.",
      icon: ServerCog,
    },
  ],
  process: [
    [
      "Phân tích hiện trạng",
      "Kiểm tra tốc độ, kỹ thuật SEO, bảo mật và hiệu suất tổng thể.",
    ],
    [
      "Lên kế hoạch tối ưu",
      "Đưa ra giải pháp chi tiết dựa trên kết quả phân tích.",
    ],
    [
      "Triển khai tối ưu",
      "Tối ưu mã nguồn, hình ảnh, cấu trúc, server và kỹ thuật.",
    ],
    [
      "Kiểm tra & đánh giá",
      "Đo lường hiệu suất, kiểm tra lại các chỉ số sau tối ưu.",
    ],
    ["Bàn giao & hỗ trợ", "Hướng dẫn và hỗ trợ kỹ thuật theo thỏa thuận."],
  ],
  categories: [
    {
      title: "Tối ưu tốc độ tải trang",
      description: "Nén hình ảnh, tối ưu code, cấu hình server và cache.",
      icon: Gauge,
    },
    {
      title: "Tối ưu Core Web Vitals",
      description: "Cải thiện LCP, INP, CLS theo tiêu chí Google.",
      icon: Activity,
    },
    {
      title: "Tối ưu chuẩn SEO",
      description: "URL, meta, dữ liệu có cấu trúc, sitemap và index.",
      icon: Search,
    },
    {
      title: "Tối ưu hình ảnh",
      description: "Nén ảnh, WebP/AVIF khi phù hợp và lazy loading.",
      icon: Image,
    },
    {
      title: "Tối ưu mã nguồn",
      description: "Dọn mã thừa, tối ưu JavaScript, CSS và database.",
      icon: CodeXml,
    },
    {
      title: "Tối ưu trên mọi thiết bị",
      description: "Đảm bảo hiển thị mượt mà và responsive.",
      icon: MonitorSmartphone,
    },
    {
      title: "Tối ưu bảo mật",
      description: "Rà soát lỗ hổng và cấu hình bảo mật phù hợp.",
      icon: ShieldCheck,
    },
    {
      title: "Tối ưu trải nghiệm UX/UI",
      description: "Cải thiện điều hướng, bố cục và tương tác.",
      icon: Sparkles,
    },
  ],
  faqs: [
    {
      question: "Tối ưu website mất bao lâu?",
      answer:
        "Thời gian phụ thuộc vào quy mô website, tình trạng mã nguồn, hệ thống máy chủ và các hạng mục cần cải thiện.",
    },
    {
      question: "Tối ưu có ảnh hưởng giao diện hiện tại không?",
      answer:
        "TNStack ưu tiên giữ nguyên giao diện và chỉ điều chỉnh khi cần thiết để cải thiện hiệu suất, sau khi thống nhất.",
    },
    {
      question: "Sau khi tối ưu tốc độ tăng bao nhiêu?",
      answer:
        "Mức cải thiện phụ thuộc tình trạng ban đầu và giới hạn kỹ thuật. Kết quả được đánh giá bằng dữ liệu đo lường thực tế.",
    },
    {
      question: "Chi phí tối ưu website như thế nào?",
      answer:
        "Chi phí được xác định sau khi kiểm tra website và đánh giá phạm vi công việc.",
    },
    {
      question: "Website có lên top Google ngay không?",
      answer:
        "Không. Tối ưu kỹ thuật cải thiện nền tảng SEO nhưng thứ hạng còn phụ thuộc nội dung, cạnh tranh và nhiều yếu tố khác.",
    },
  ],
} as const;
