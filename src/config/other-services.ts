import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  ChartNoAxesCombined,
  DatabaseBackup,
  Headphones,
  MonitorCog,
  Puzzle,
  UsersRound,
  Wrench,
} from "lucide-react";

export interface OtherService {
  id:
    | "data-recovery"
    | "marketing-tools"
    | "website-consulting"
    | "technical-support";
  title: string;
  description: string;
  icon: LucideIcon;
  features: readonly string[];
}

export const otherServicesPage = {
  benefits: [
    {
      title: "Giải pháp linh hoạt",
      description: "Phù hợp từng nhu cầu",
      icon: Puzzle,
    },
    {
      title: "Đội ngũ chuyên nghiệp",
      description: "Kinh nghiệm thực tế",
      icon: UsersRound,
    },
    {
      title: "Hỗ trợ nhanh chóng",
      description: "Đồng hành lâu dài",
      icon: Headphones,
    },
    {
      title: "Chi phí hợp lý",
      description: "Tối ưu theo từng dự án",
      icon: BadgeCheck,
    },
  ],
  services: [
    {
      id: "data-recovery",
      title: "Khôi phục dữ liệu website",
      description:
        "Khôi phục dữ liệu website bị mất do lỗi, tấn công hoặc sự cố hệ thống.",
      icon: DatabaseBackup,
      features: [
        "Khôi phục dữ liệu website",
        "Phân tích nguyên nhân",
        "Đảm bảo an toàn dữ liệu",
        "Hỗ trợ kỹ thuật",
      ],
    },
    {
      id: "marketing-tools",
      title: "Tích hợp công cụ marketing",
      description:
        "Tích hợp các công cụ marketing giúp tối ưu hiệu quả kinh doanh.",
      icon: ChartNoAxesCombined,
      features: [
        "Tích hợp Google Analytics",
        "Cài đặt Pixel Facebook, TikTok",
        "Tích hợp công cụ email",
        "Đo lường và theo dõi chuyển đổi",
      ],
    },
    {
      id: "website-consulting",
      title: "Tư vấn giải pháp website",
      description:
        "Tư vấn giải pháp phù hợp với mục tiêu và ngân sách của bạn.",
      icon: MonitorCog,
      features: [
        "Phân tích nhu cầu thực tế",
        "Đề xuất giải pháp phù hợp",
        "Tư vấn tối ưu chi phí",
        "Đồng hành triển khai",
      ],
    },
    {
      id: "technical-support",
      title: "Hỗ trợ kỹ thuật",
      description: "Hỗ trợ xử lý các vấn đề kỹ thuật liên quan đến website.",
      icon: Wrench,
      features: [
        "Xử lý lỗi website",
        "Tối ưu hiệu suất",
        "Hỗ trợ cấu hình server",
        "Tư vấn và hướng dẫn sử dụng",
      ],
    },
  ] satisfies readonly OtherService[],
} as const;
