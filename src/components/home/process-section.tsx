import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Khám phá",
    text: "Hiểu mô hình kinh doanh, khách hàng mục tiêu và vấn đề cần giải quyết.",
  },
  {
    number: "02",
    title: "Chiến lược",
    text: "Xác định thông điệp, hành trình người dùng và chỉ số thành công.",
  },
  {
    number: "03",
    title: "Thiết kế & triển khai",
    text: "Biến chiến lược thành trải nghiệm trực quan, nhanh và nhất quán.",
  },
  {
    number: "04",
    title: "Đo lường & tối ưu",
    text: "Theo dõi dữ liệu thực tế để liên tục cải thiện hiệu quả.",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="bg-dark py-20 text-white sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Quy trình hợp tác"
            title="Rõ ràng ở từng bước. Đồng hành trong suốt dự án."
            description="Bạn luôn biết dự án đang ở đâu, điều gì đang được thực hiện và quyết định đó phục vụ mục tiêu nào."
            className="[&_p:last-child]:text-white/55 [&>p:first-child]:text-[var(--brand-on-dark)]"
          />
        </Reveal>
        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <StaggerItem key={step.number} className="h-full">
              <li className="group h-full bg-dark p-7 transition-colors hover:bg-white/[0.04] sm:p-8">
                <span className="font-mono text-sm text-[var(--brand-on-dark)]">
                  {step.number}
                </span>
                <div className="mt-16 h-px bg-white/10">
                  <span className="block h-px w-10 bg-accent transition-all duration-500 group-hover:w-full" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {step.text}
                </p>
              </li>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
