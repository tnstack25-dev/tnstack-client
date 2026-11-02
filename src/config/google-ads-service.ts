import {
  BadgeDollarSign,
  BarChart3,
  ChartNoAxesCombined,
  FileChartColumn,
  Goal,
  Headphones,
  ListChecks,
  Megaphone,
  MousePointerClick,
  PanelsTopLeft,
  Search,
  Settings,
  ShoppingBag,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";

export const googleAdsService = {
  highlights: [
    {
      title: "Chiến lược theo ngành",
      description: "Phù hợp mục tiêu kinh doanh",
      icon: Goal,
    },
    {
      title: "Tối ưu chi phí quảng cáo",
      description: "Tiếp cận đúng khách hàng",
      icon: BadgeDollarSign,
    },
    {
      title: "Báo cáo minh bạch",
      description: "Theo dõi hiệu quả rõ ràng",
      icon: FileChartColumn,
    },
    {
      title: "Hỗ trợ chuyên sâu",
      description: "Đồng hành trong quá trình tối ưu",
      icon: Headphones,
    },
  ],
  benefits: [
    {
      title: "Tiếp cận khách hàng tiềm năng",
      description: "Hiển thị đúng người, đúng thời điểm họ có nhu cầu.",
      icon: Users,
    },
    {
      title: "Gia tăng cơ hội bán hàng",
      description:
        "Thu hút khách hàng quan tâm và hỗ trợ hành trình chuyển đổi.",
      icon: TrendingUp,
    },
    {
      title: "Tối ưu ngân sách quảng cáo",
      description:
        "Phân bổ ngân sách theo dữ liệu và hạn chế chi tiêu không phù hợp.",
      icon: BadgeDollarSign,
    },
    {
      title: "Chiến lược theo từng ngành",
      description: "Tư vấn và triển khai phù hợp đặc thù từng lĩnh vực.",
      icon: Settings,
    },
    {
      title: "Theo dõi & báo cáo minh bạch",
      description: "Báo cáo dễ hiểu dựa trên dữ liệu đo lường đã cấu hình.",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Hỗ trợ lâu dài",
      description: "Đồng hành tối ưu và đề xuất mở rộng khi phù hợp.",
      icon: Headphones,
    },
  ],
  process: [
    {
      title: "Tư vấn & phân tích",
      description: "Tìm hiểu mục tiêu, lĩnh vực và khách hàng mục tiêu.",
      icon: Search,
    },
    {
      title: "Lên chiến lược",
      description: "Đề xuất kế hoạch, ngân sách và cách triển khai.",
      icon: BarChart3,
    },
    {
      title: "Thiết lập & triển khai",
      description: "Thiết lập chiến dịch, mẫu quảng cáo và tiện ích.",
      icon: ListChecks,
    },
    {
      title: "Theo dõi & tối ưu",
      description: "Phân tích dữ liệu, tối ưu hiệu quả và chi phí.",
      icon: MousePointerClick,
    },
    {
      title: "Báo cáo & mở rộng",
      description: "Báo cáo định kỳ và đề xuất hướng phát triển.",
      icon: FileChartColumn,
    },
  ],
  adTypes: [
    {
      title: "Quảng cáo tìm kiếm",
      subtitle: "Search Ads",
      description:
        "Hiển thị khi khách hàng tìm kiếm sản phẩm hoặc dịch vụ của bạn trên Google.",
      icon: Search,
      accent: "from-blue-500/30 to-[var(--service-card)]",
    },
    {
      title: "Quảng cáo hiển thị",
      subtitle: "Display Ads",
      description:
        "Tiếp cận khách hàng trên website và ứng dụng thuộc mạng lưới quảng cáo Google.",
      icon: PanelsTopLeft,
      accent: "from-yellow-400/25 to-[var(--service-card)]",
    },
    {
      title: "Quảng cáo YouTube",
      subtitle: "Video Ads",
      description:
        "Tăng nhận diện và thu hút khách hàng tiềm năng bằng nội dung video.",
      icon: Video,
      accent: "from-red-500/25 to-[var(--service-card)]",
    },
    {
      title: "Quảng cáo mua sắm",
      subtitle: "Shopping Ads",
      description:
        "Hiển thị thông tin sản phẩm trực tiếp trên Google cho website bán hàng.",
      icon: ShoppingBag,
      accent: "from-blue-400/25 to-[var(--service-card)]",
    },
  ],
  faqs: [
    {
      question: "Chạy Google Ads có hiệu quả không?",
      answer:
        "Google Ads có thể mang lại hiệu quả khi chiến dịch được thiết lập đúng mục tiêu, lựa chọn từ khóa phù hợp và tối ưu liên tục.",
    },
    {
      question: "Chi phí chạy Google Ads bao nhiêu?",
      answer:
        "Chi phí phụ thuộc ngành nghề, mức độ cạnh tranh, khu vực quảng cáo và ngân sách của doanh nghiệp.",
    },
    {
      question: "Mất bao lâu để có khách hàng?",
      answer:
        "Quảng cáo có thể hiển thị sau khi được phê duyệt, nhưng thời gian phát sinh khách hàng phụ thuộc nhiều yếu tố.",
    },
    {
      question: "Tôi có thể tự chạy Google Ads được không?",
      answer:
        "Có. Tuy nhiên, tối ưu chiến dịch hiệu quả cần kiến thức về cấu trúc tài khoản, đo lường và phân tích dữ liệu.",
    },
    {
      question: "Có cam kết doanh số không?",
      answer:
        "Kết quả phụ thuộc sản phẩm, ngân sách, mức độ cạnh tranh và nhiều yếu tố khác. Mục tiêu và chỉ số đánh giá sẽ được thống nhất trước khi triển khai.",
    },
    {
      question: "Làm sao theo dõi hiệu quả quảng cáo?",
      answer:
        "Có thể theo dõi qua Google Ads, GA4 và các công cụ đo lường chuyển đổi được cấu hình phù hợp.",
    },
  ],
} as const;

export const googleAdsDecorativeIcons = { Megaphone };
