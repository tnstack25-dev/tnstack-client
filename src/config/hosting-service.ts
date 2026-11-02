import {
  CloudUpload,
  CodeXml,
  HardDrive,
  Settings,
  ShieldCheck,
  Zap,
} from "lucide-react";

export interface HostingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: "VND";
  billingCycle: "monthly";
  popular?: boolean;
  features: string[];
}

export const hostingPlans: HostingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "Giải pháp hosting tối ưu cho website cá nhân, landing page và các dự án mới.",
    price: 89000,
    currency: "VND",
    billingCycle: "monthly",
    features: [
      "3 Website",
      "Băng thông: Unlimited",
      "CPU: 2 Core",
      "RAM: 4 GB",
      "10GB SSD NVMe",
      "Miễn phí ZeroSSL",
      "Quản lý: FastPanel",
      "Sao lưu hàng tuần",
      "Hỗ trợ qua email, zalo",
    ],
  },
  {
    id: "business",
    name: "Business",
    description:
      "Hiệu năng cao, ổn định và phù hợp cho website doanh nghiệp, bán hàng và dịch vụ.",
    price: 149000,
    currency: "VND",
    billingCycle: "monthly",
    popular: true,
    features: [
      "10 Website",
      "Băng thông: Unlimited",
      "Dung lượng SSD: 20 GB",
      "CPU: 4 Core",
      "RAM: 6 GB",
      "Miễn phí ZeroSSL",
      "Quản lý: FastPanel",
      "Backup hàng ngày",
      "Hỗ trợ qua 24/7",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "Tài nguyên mạnh mẽ, ưu tiên hiệu năng và độ ổn định cho website lớn, nhiều truy cập.",
    price: 249000,
    currency: "VND",
    billingCycle: "monthly",
    features: [
      "30 Website",
      "Băng thông: Unlimited",
      "Dung lượng SSD: 40 GB",
      "CPU: 6 Core",
      "RAM: 6 GB",
      "Miễn phí ZeroSSL",
      "Quản lý: FastPanel",
      "Backup hàng ngày",
      "Hỗ trợ qua 24/7",
    ],
  },
];

export const hostingService = {
  benefits: [
    {
      title: "Tốc độ cao",
      description: "Ổn định, phản hồi nhanh",
      icon: Zap,
    },
    {
      title: "Bảo mật website",
      description: "Chứng chỉ SSL miễn phí",
      icon: ShieldCheck,
    },
    {
      title: "Quản lý dễ dàng",
      description: "Bảng điều khiển FastPanel",
      icon: Settings,
    },
    {
      title: "Sao lưu dữ liệu",
      description: "Sao lưu theo từng gói Hosting",
      icon: CloudUpload,
    },
  ],
  technologies: [
    {
      title: "SSD NVMe",
      description: "Tốc độ đọc ghi cao",
      icon: HardDrive,
    },
    {
      title: "FastPanel",
      description: "Quản lý website dễ dàng",
      icon: Settings,
    },
    {
      title: "ZeroSSL",
      description: "Chứng chỉ SSL miễn phí",
      icon: ShieldCheck,
    },
    {
      title: "PHP",
      description: "Hỗ trợ vận hành website PHP",
      icon: CodeXml,
    },
    {
      title: "Sao lưu dữ liệu",
      description: "Theo từng gói dịch vụ",
      icon: CloudUpload,
    },
  ],
  faqs: [
    {
      question: "Hosting là gì?",
      answer:
        "Hosting là dịch vụ cung cấp không gian lưu trữ và tài nguyên máy chủ để website có thể hoạt động và được truy cập trên Internet.",
    },
    {
      question: "Nên chọn gói hosting nào?",
      answer:
        "Gói Basic phù hợp website cá nhân và dự án mới. Business phù hợp website doanh nghiệp, bán hàng và dịch vụ. Enterprise dành cho nhu cầu tài nguyên lớn hơn và nhiều website hơn.",
    },
    {
      question: "Có hỗ trợ chuyển dữ liệu website không?",
      answer:
        "Việc hỗ trợ chuyển dữ liệu và chi phí phát sinh, nếu có, sẽ được tư vấn theo tình trạng website.",
    },
    {
      question: "Website có bị gián đoạn khi nâng cấp gói hosting không?",
      answer:
        "Thời gian gián đoạn phụ thuộc phương án nâng cấp và tình trạng hệ thống. TNSTACK sẽ tư vấn trước khi thực hiện.",
    },
    {
      question: "Hosting có giới hạn băng thông không?",
      answer:
        "Các gói được công bố có băng thông Unlimited. Việc sử dụng vẫn có thể chịu giới hạn kỹ thuật hoặc chính sách sử dụng tài nguyên của dịch vụ.",
    },
    {
      question: "Hosting có hỗ trợ WordPress không?",
      answer:
        "Các gói hosting có thể được sử dụng cho WordPress khi đáp ứng yêu cầu kỹ thuật và cấu hình tương ứng.",
    },
  ],
} as const;

export function formatHostingPrice(price: number) {
  return new Intl.NumberFormat("vi-VN").format(price);
}
