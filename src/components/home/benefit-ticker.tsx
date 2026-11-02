const benefits = [
  "Chiến lược rõ ràng",
  "Thiết kế thuyết phục",
  "Tốc độ tối ưu",
  "Chuẩn SEO nền tảng",
  "Đo lường minh bạch",
  "Hỗ trợ sau bàn giao",
] as const;

export function BenefitTicker() {
  return (
    <section
      className="overflow-hidden border-y border-primary/20 bg-primary py-4 text-primary-foreground"
      aria-label="Lợi ích nổi bật"
    >
      <div className="marquee-track flex w-max items-center">
        {[...benefits, ...benefits].map((benefit, index) => (
          <div key={`${benefit}-${index}`} className="flex items-center">
            <span className="px-6 text-sm font-bold tracking-[0.13em] uppercase sm:px-9">
              {benefit}
            </span>
            <span className="size-1.5 rotate-45 bg-accent" />
          </div>
        ))}
      </div>
    </section>
  );
}
