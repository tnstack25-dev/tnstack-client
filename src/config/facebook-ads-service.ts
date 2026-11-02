import {
  BadgeDollarSign,
  BarChart3,
  ChartNoAxesCombined,
  FileChartColumn,
  Handshake,
  Headphones,
  ImageIcon,
  ListChecks,
  MessageCircle,
  MousePointerClick,
  PanelsTopLeft,
  Search,
  Settings,
  Target,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";

export const facebookAdsService = {
  highlights: [
    {
      title: "Tiếp cận đúng khách hàng",
      description: "Tăng cơ hội chuyển đổi",
      icon: Target,
    },
    {
      title: "Tối ưu chi phí quảng cáo",
      description: "Hiệu quả và bền vững",
      icon: BadgeDollarSign,
    },
    {
      title: "Báo cáo minh bạch",
      description: "Theo dõi kết quả rõ ràng",
      icon: FileChartColumn,
    },
    {
      title: "Hỗ trợ chuyên sâu",
      description: "Đồng hành lâu dài",
      icon: Headphones,
    },
  ],
  benefits: [
    {
      title: "Tiếp cận khách hàng tiềm năng",
      description: "Hiển thị đúng người, đúng thời điểm phù hợp.",
      icon: Users,
    },
    {
      title: "Gia tăng cơ hội bán hàng",
      description: "Thu hút khách hàng và hỗ trợ hành trình chuyển đổi.",
      icon: TrendingUp,
    },
    {
      title: "Tối ưu ngân sách quảng cáo",
      description: "Phân bổ ngân sách hợp lý, hạn chế lãng phí.",
      icon: BadgeDollarSign,
    },
    {
      title: "Chiến lược theo từng ngành",
      description: "Tư vấn và triển khai theo đặc thù lĩnh vực.",
      icon: Settings,
    },
    {
      title: "Sáng tạo nội dung quảng cáo",
      description: "Định hướng hình ảnh, video rõ ràng và thu hút.",
      icon: ImageIcon,
    },
    {
      title: "Theo dõi & báo cáo minh bạch",
      description: "Báo cáo dễ hiểu dựa trên dữ liệu đã cấu hình.",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Hỗ trợ kỹ thuật nhanh chóng",
      description: "Tiếp nhận và xử lý vấn đề theo phạm vi hỗ trợ.",
      icon: Headphones,
    },
    {
      title: "Đồng hành lâu dài",
      description: "Tư vấn tối ưu và mở rộng chiến dịch khi phù hợp.",
      icon: Handshake,
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
      icon: Target,
    },
    {
      title: "Thiết lập & triển khai",
      description: "Tạo chiến dịch, quảng cáo và tối ưu nội dung.",
      icon: ListChecks,
    },
    {
      title: "Theo dõi & tối ưu",
      description: "Phân tích dữ liệu, tối ưu hiệu quả và chi phí.",
      icon: BarChart3,
    },
    {
      title: "Báo cáo & mở rộng",
      description: "Báo cáo định kỳ và đề xuất hướng phát triển.",
      icon: FileChartColumn,
    },
  ],
  adTypes: [
    {
      title: "Quảng cáo bài viết",
      subtitle: "Post Ads",
      description:
        "Tăng tương tác và tiếp cận khách hàng bằng bài viết hấp dẫn.",
      icon: PanelsTopLeft,
      visual: "post",
    },
    {
      title: "Quảng cáo hình ảnh",
      subtitle: "Image Ads",
      description: "Truyền tải thông điệp bằng hình ảnh trực quan, thu hút.",
      icon: ImageIcon,
      visual: "image",
    },
    {
      title: "Quảng cáo video",
      subtitle: "Video Ads",
      description: "Tăng nhận diện và thu hút khách hàng tiềm năng qua video.",
      icon: Video,
      visual: "video",
    },
    {
      title: "Quảng cáo tin nhắn",
      subtitle: "Messenger Ads",
      description:
        "Tạo cuộc trò chuyện trực tiếp, hỗ trợ tư vấn và chuyển đổi.",
      icon: MessageCircle,
      visual: "message",
    },
  ],
  dashboard: [
    { label: "Lượt tiếp cận", value: "125.4K", icon: Users },
    { label: "Lượt tương tác", value: "12.8K", icon: MousePointerClick },
    { label: "Tỷ lệ chuyển đổi", value: "2.6%", icon: TrendingUp },
    { label: "Chi phí quảng cáo", value: "8.5M đ", icon: BadgeDollarSign },
  ],
  faqs: [
    {
      question: "Chạy Facebook Ads có hiệu quả không?",
      answer:
        "Facebook Ads có thể mang lại hiệu quả khi chiến dịch được thiết lập đúng mục tiêu, lựa chọn đối tượng phù hợp và được tối ưu liên tục.",
    },
    {
      question: "Chi phí chạy Facebook Ads bao nhiêu?",
      answer:
        "Chi phí phụ thuộc ngành nghề, mức độ cạnh tranh, đối tượng mục tiêu và ngân sách của doanh nghiệp.",
    },
    {
      question: "Mất bao lâu để có khách hàng?",
      answer:
        "Quảng cáo có thể bắt đầu phân phối sau khi được phê duyệt, nhưng thời gian phát sinh khách hàng phụ thuộc vào nhiều yếu tố.",
    },
    {
      question: "Tôi có thể tự chạy Facebook Ads được không?",
      answer:
        "Có. Tuy nhiên, tối ưu hiệu quả cần kiến thức về chiến lược, nội dung, dữ liệu và đo lường chuyển đổi.",
    },
    {
      question: "Có cam kết doanh số không?",
      answer:
        "Kết quả phụ thuộc sản phẩm, ngân sách, nội dung và mức độ cạnh tranh. Mục tiêu đánh giá sẽ được thống nhất trước khi triển khai.",
    },
    {
      question: "Làm sao theo dõi hiệu quả quảng cáo?",
      answer:
        "Có thể theo dõi qua Meta Ads Manager, Meta Pixel và các công cụ đo lường được cấu hình phù hợp.",
    },
  ],
} as const;
