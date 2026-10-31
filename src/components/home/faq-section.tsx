import { Plus } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    question: "Chi phí thiết kế website được tính như thế nào?",
    answer:
      "Chi phí phụ thuộc vào mục tiêu, số lượng trang, tính năng và mức độ nội dung cần hỗ trợ. Sau buổi trao đổi, bạn sẽ nhận phạm vi công việc và báo giá rõ ràng trước khi bắt đầu.",
  },
  {
    question: "Thời gian triển khai một website là bao lâu?",
    answer:
      "Một website dịch vụ thường cần từ vài tuần tùy quy mô và tốc độ phản hồi nội dung. Timeline cụ thể được thống nhất ngay trong đề xuất dự án.",
  },
  {
    question: "Website có được tối ưu SEO và mobile không?",
    answer:
      "Có. Responsive, hiệu năng, cấu trúc nội dung và technical SEO nền tảng là tiêu chuẩn trong quá trình thiết kế và phát triển.",
  },
  {
    question: "Có hỗ trợ sau khi website hoàn thành không?",
    answer:
      "Có. Dự án bao gồm hướng dẫn quản trị và giai đoạn hỗ trợ sau bàn giao. Gói bảo trì dài hạn có thể được thiết kế theo nhu cầu vận hành.",
  },
] as const;

export function FaqSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal direction="right">
          <SectionHeading
            eyebrow="Câu hỏi thường gặp"
            title="Thông tin cần biết trước khi bắt đầu"
            description="Không thấy câu trả lời bạn cần? Hãy gửi cho chúng tôi một tin nhắn."
          />
        </Reveal>
        <Stagger className="divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <StaggerItem key={faq.question}>
              <details className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-lg font-semibold marker:hidden">
                  {faq.question}
                  <Plus className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="max-w-2xl pr-10 pb-6 leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
