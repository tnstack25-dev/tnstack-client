import {
  ArrowDown,
  ArrowRight,
  Award,
  BookOpen,
  Braces,
  Check,
  Code2,
  Compass,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  MessageCircleMore,
  MousePointer2,
  Palette,
  PenTool,
  Rocket,
  ScanSearch,
  Sparkles,
  Target,
  TerminalSquare,
  UsersRound,
} from "lucide-react";
import type { Metadata } from "next";

import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { WordReveal } from "@/components/motion/word-reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioConfig } from "@/config/portfolio";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Portfolio cá nhân",
  description:
    "Portfolio cá nhân về kinh nghiệm, kỹ năng, dự án và hành trình phát triển sản phẩm số.",
};

const technologies = portfolioConfig.skillGroups.flatMap(
  (group) => group.skills,
);

const skillIcons = [Compass, Code2, Braces] as const;

const processSteps = [
  {
    number: "01",
    title: "Khám phá",
    description:
      "Làm rõ mục tiêu, người dùng và ràng buộc trước khi đưa ra giải pháp.",
    icon: ScanSearch,
  },
  {
    number: "02",
    title: "Định hình",
    description:
      "Biến insight thành luồng trải nghiệm, cấu trúc và hướng thị giác nhất quán.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Xây dựng",
    description:
      "Hiện thực hóa bằng code sạch, responsive và có khả năng mở rộng.",
    icon: Braces,
  },
  {
    number: "04",
    title: "Tối ưu",
    description:
      "Kiểm thử, đo lường và cải tiến để sản phẩm tạo ra kết quả tốt hơn.",
    icon: Rocket,
  },
] as const;

const projectTheme = {
  green: {
    wrapper: "from-primary-soft via-background to-accent-soft",
    panel: "bg-dark text-white",
    accent: "bg-primary",
  },
  blue: {
    wrapper: "from-accent-soft via-background to-primary-soft",
    panel: "bg-background text-foreground",
    accent: "bg-accent",
  },
  dark: {
    wrapper: "from-[#0f172a] via-[#1e3a8a] to-[#38bdf8]",
    panel: "bg-white/[0.08] text-white",
    accent: "bg-[var(--brand-on-dark)]",
  },
} as const;

export default function PortfolioPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div
          className="grid-pattern absolute inset-0 -z-20"
          aria-hidden="true"
        />
        <div className="pulse-soft absolute -top-48 -right-44 -z-10 size-[38rem] rounded-full bg-primary/12 blur-3xl" />
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal direction="right">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-4 py-2 text-sm font-semibold text-primary">
                <span className="relative flex size-2">
                  <span className="ping-soft absolute inline-flex size-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                {portfolioConfig.availability}
              </div>
              <p className="mt-7 text-sm font-bold tracking-[0.18em] text-muted-foreground uppercase">
                Xin chào, tôi là {portfolioConfig.name}
              </p>
              <h1 className="mt-4 max-w-4xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-balance">
                <WordReveal text="Tôi thiết kế và xây dựng sản phẩm số có mục đích" />
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {portfolioConfig.introduction}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#du-an-ca-nhan"
                  className={buttonVariants({ variant: "dark", size: "lg" })}
                >
                  Xem dự án nổi bật <ArrowDown />
                </a>
                <ContactDialogTrigger
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Trao đổi cùng tôi <ArrowRight />
                </ContactDialogTrigger>
              </div>
              <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-primary" />{" "}
                  {portfolioConfig.location}
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Mail className="size-4 text-primary" />{" "}
                  {siteConfig.contact.email}
                </a>
                <a
                  href={siteConfig.contact.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-[#0068ff]"
                >
                  <MessageCircleMore className="size-4" /> Zalo
                </a>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.15}>
              <TiltCard className="relative mx-auto w-full max-w-[32rem]">
                <div className="absolute -inset-5 -z-10 -rotate-3 rounded-[2.5rem] bg-accent-soft" />
                <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-dark p-7 text-white shadow-2xl shadow-dark/20 sm:p-9">
                  <div className="portfolio-scan absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-on-dark)] to-transparent" />
                  <div className="flex items-start justify-between">
                    <div className="grid size-24 place-items-center rounded-[2rem] bg-primary text-3xl font-black shadow-xl shadow-primary/30">
                      {portfolioConfig.initials}
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-mono text-xs text-white/55">
                      PORTFOLIO / 2026
                    </span>
                  </div>
                  <p className="mt-12 text-sm font-semibold text-[var(--brand-on-dark)]">
                    {portfolioConfig.role}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                    Strategy × Design × Code
                  </h2>
                  <p className="mt-4 leading-7 text-white/55">
                    Tôi làm việc ở giao điểm của trải nghiệm người dùng, công
                    nghệ và tăng trưởng.
                  </p>
                  <div className="mt-9 grid grid-cols-3 gap-2">
                    {[Palette, TerminalSquare, Rocket].map((Icon, index) => (
                      <div
                        key={index}
                        className="group grid aspect-square place-items-center rounded-2xl border border-white/10 bg-white/[0.05] transition-colors hover:bg-white/[0.1]"
                      >
                        <Icon className="size-6 text-white/70 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:text-[var(--brand-on-dark)]" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40">
                    <span className="flex items-center gap-3">
                      <span className="size-2 rounded-full bg-[var(--brand-on-dark)]" />{" "}
                      Luôn học hỏi. Luôn cải tiến.
                    </span>
                    <span className="font-mono">VN — 2026</span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          <Stagger className="mt-20 grid overflow-hidden rounded-[2rem] border border-border bg-background sm:grid-cols-3">
            {portfolioConfig.highlights.map((item) => (
              <StaggerItem
                key={item.value}
                className="border-b border-border p-6 last:border-b-0 sm:border-r sm:border-b-0 sm:p-8 sm:last:border-r-0"
              >
                <p className="text-2xl font-semibold tracking-tight text-primary">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section
        className="overflow-hidden border-y border-border bg-primary py-4 text-primary-foreground"
        aria-label="Công nghệ sử dụng"
      >
        <div className="marquee-track flex w-max items-center">
          {[...technologies, ...technologies].map((technology, index) => (
            <div key={`${technology}-${index}`} className="flex items-center">
              <span className="px-7 text-sm font-bold tracking-[0.14em] uppercase sm:px-10">
                {technology}
              </span>
              <Sparkles className="size-4 text-accent" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28" id="gioi-thieu-ca-nhan">
        <Container className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <Reveal direction="right">
            <SectionHeading
              eyebrow="Về tôi"
              title="Tư duy như một người làm sản phẩm, triển khai như một kỹ sư"
            />
            <div className="mt-9 rounded-[1.75rem] bg-accent p-7 text-white">
              <Target className="size-8" />
              <p className="mt-5 text-lg leading-8 font-medium">
                “Sản phẩm tốt không bắt đầu bằng nhiều tính năng. Nó bắt đầu
                bằng việc hiểu đúng vấn đề.”
              </p>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <div className="space-y-6 text-lg leading-9 text-muted-foreground">
              {portfolioConfig.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Tư duy hệ thống",
                "Chú trọng chi tiết",
                "Giao tiếp rõ ràng",
                "Học hỏi liên tục",
              ].map((quality) => (
                <div
                  key={quality}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4 text-sm font-semibold text-foreground"
                >
                  <Check className="size-4 text-primary" /> {quality}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-28" id="ky-nang">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Năng lực"
              title="Một bộ kỹ năng kết nối sản phẩm, giao diện và hệ thống"
              description="Tôi không xem thiết kế và phát triển là hai giai đoạn tách biệt. Chúng bổ trợ cho nhau trong toàn bộ vòng đời sản phẩm."
              align="center"
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
            {portfolioConfig.skillGroups.map((group, index) => {
              const Icon = skillIcons[index];
              return (
                <StaggerItem key={group.title}>
                  <TiltCard className="h-full">
                    <article className="group h-full rounded-[2rem] border border-border bg-background p-7 transition-shadow hover:shadow-xl hover:shadow-dark/5 sm:p-8">
                      <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="size-5" />
                      </span>
                      <h2 className="mt-9 text-2xl font-semibold">
                        {group.title}
                      </h2>
                      <p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">
                        {group.description}
                      </p>
                      <div className="mt-7 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </article>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-dark py-20 text-white sm:py-28">
        <div className="grid-pattern absolute inset-0 opacity-[0.06]" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <Reveal direction="right">
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  eyebrow="Cách tôi làm việc"
                  title="Quy trình rõ ràng. Quyết định có lý do."
                  description="Một quy trình tinh gọn giúp đội ngũ nhìn thấy tiến độ, hiểu quyết định và giảm rủi ro ngay từ đầu."
                  className="[&_p:last-child]:text-white/55 [&>p:first-child]:text-[var(--brand-on-dark)]"
                />
                <div className="mt-9 flex items-center gap-3 text-sm text-white/45">
                  <UsersRound className="size-5 text-[var(--brand-on-dark)]" />
                  Đồng hành trực tiếp trong toàn bộ dự án
                </div>
              </div>
            </Reveal>
            <Stagger className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <StaggerItem key={step.number}>
                    <article className="group relative h-full min-h-64 overflow-hidden bg-dark p-7 sm:p-9">
                      <span className="absolute top-5 right-6 font-mono text-5xl font-semibold tracking-[-0.08em] text-white/[0.05] transition-colors duration-500 group-hover:text-[var(--brand-on-dark)]/10">
                        {step.number}
                      </span>
                      <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-[var(--brand-on-dark)] transition-all duration-500 group-hover:rotate-6 group-hover:border-[var(--brand-on-dark)]/40 group-hover:bg-[var(--brand-on-dark)]/10">
                        <Icon className="size-5" />
                      </span>
                      <p className="mt-10 font-mono text-xs text-[var(--brand-on-dark)]">
                        BƯỚC {step.number}
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold">
                        {step.title}
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-white/50">
                        {step.description}
                      </p>
                      <div className="absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0 bg-[var(--brand-on-dark)] transition-transform duration-500 group-hover:scale-x-100" />
                    </article>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28" id="kinh-nghiem">
        <Container className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <Reveal direction="right">
            <SectionHeading
              eyebrow="Kinh nghiệm"
              title="Hành trình xây dựng sản phẩm và năng lực"
              description="Mỗi vai trò là một cơ hội để hiểu sâu hơn về người dùng, đội ngũ và cách biến ý tưởng thành kết quả."
            />
          </Reveal>
          <div className="relative">
            <div
              className="timeline-line absolute top-0 bottom-0 left-[1.45rem] w-px bg-border"
              aria-hidden="true"
            />
            <Stagger className="space-y-8">
              {portfolioConfig.experience.map((item) => (
                <StaggerItem
                  key={`${item.period}-${item.role}`}
                  className="relative pl-18"
                >
                  <span className="absolute top-1 left-0 grid size-12 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg">
                    <Rocket className="size-4" />
                  </span>
                  <article className="rounded-[1.75rem] border border-border bg-background p-6 sm:p-8">
                    <p className="font-mono text-xs font-semibold text-primary">
                      {item.period}
                    </p>
                    <h2 className="mt-3 text-xl font-semibold">{item.role}</h2>
                    <p className="mt-1 text-sm font-semibold text-primary">
                      {item.company}
                    </p>
                    <p className="mt-5 leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-3 text-sm leading-6"
                        >
                          <Check className="mt-1 size-4 shrink-0 text-primary" />{" "}
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      <section
        className="relative overflow-hidden bg-[#0f172a] py-20 text-white sm:py-28"
        id="du-an-ca-nhan"
      >
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <Container>
          <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Selected work / 2026"
              title="Dự án chọn lọc"
              description="Không chỉ là giao diện đẹp — mỗi dự án là một hệ thống được thiết kế để giải quyết đúng bài toán."
              className="max-w-3xl [&_p:last-child]:text-white/55 [&>p:first-child]:text-[var(--brand-on-dark)]"
            />
            <p className="max-w-xs border-l border-white/10 pl-5 text-sm leading-6 text-white/40">
              Từ chiến lược, trải nghiệm đến kỹ thuật — một người chịu trách
              nhiệm cho sự nhất quán xuyên suốt.
            </p>
          </Reveal>
          <Stagger className="mt-14 grid gap-6 lg:grid-cols-12">
            {portfolioConfig.projects.map((project, index) => {
              const theme = projectTheme[project.theme];
              return (
                <StaggerItem
                  key={project.title}
                  className={
                    index === 0
                      ? "lg:col-span-7 lg:row-span-2"
                      : "lg:col-span-5"
                  }
                >
                  <article className="group flex h-full flex-col rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-3 transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.055]">
                    <div
                      className={`relative overflow-hidden rounded-[1.65rem] bg-gradient-to-br p-5 ${index === 0 ? "aspect-[4/3] lg:aspect-auto lg:min-h-[30rem]" : "aspect-[16/8]"} ${theme.wrapper}`}
                    >
                      <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
                      <div
                        className={`relative h-full rounded-2xl border border-white/10 p-5 shadow-2xl backdrop-blur-sm transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-[0.6deg] ${theme.panel}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-current opacity-20" />
                            <span className="size-2 rounded-full bg-current opacity-20" />
                            <span className="size-2 rounded-full bg-current opacity-20" />
                          </div>
                          <span className="font-mono text-[10px] opacity-40">
                            CASE STUDY — 0{index + 1}
                          </span>
                        </div>
                        <div className={index === 0 ? "mt-20" : "mt-9"}>
                          <span
                            className={`block h-1.5 w-12 rounded-full ${theme.accent}`}
                          />
                          <div className="mt-5 h-5 w-3/4 rounded bg-current opacity-70" />
                          <div className="mt-3 h-2.5 w-full rounded bg-current opacity-10" />
                          <div className="mt-2 h-2.5 w-4/5 rounded bg-current opacity-10" />
                        </div>
                        <div
                          className={`${index === 0 ? "mt-12" : "mt-7"} grid grid-cols-3 gap-2`}
                        >
                          {[68, 92, 54].map((height, barIndex) => (
                            <span
                              key={height}
                              className="relative overflow-hidden rounded-xl bg-current opacity-10"
                              style={{ height: index === 0 ? height : 42 }}
                            >
                              <span
                                className={`absolute inset-x-0 bottom-0 ${theme.accent}`}
                                style={{ height: `${35 + barIndex * 18}%` }}
                              />
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-xs font-bold tracking-[0.14em] text-[var(--brand-on-dark)] uppercase">
                          {project.type}
                        </p>
                        <MousePointer2 className="size-4 -rotate-12 text-white/25 transition-all duration-300 group-hover:rotate-0 group-hover:text-[var(--brand-on-dark)]" />
                      </div>
                      <h2
                        className={`${index === 0 ? "text-3xl sm:text-4xl" : "text-xl"} mt-3 font-semibold`}
                      >
                        {project.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-white/50">
                        {project.description}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2 pt-6">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/45"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 sm:py-28" id="hoc-van">
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <div className="flex items-center gap-3 text-primary">
              <GraduationCap className="size-6" />
              <p className="text-sm font-bold tracking-[0.16em] uppercase">
                Học vấn
              </p>
            </div>
            <div className="mt-8 space-y-4">
              {portfolioConfig.education.map((item) => (
                <article
                  key={item.degree}
                  className="rounded-[1.75rem] border border-border bg-background p-7"
                >
                  <p className="font-mono text-xs text-primary">
                    {item.period}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold">{item.degree}</h2>
                  <p className="mt-1 font-semibold text-primary">
                    {item.school}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <div className="flex items-center gap-3 text-primary">
              <Award className="size-6" />
              <p className="text-sm font-bold tracking-[0.16em] uppercase">
                Chứng chỉ & học tập
              </p>
            </div>
            <div className="mt-8 rounded-[1.75rem] bg-surface p-7 sm:p-8">
              {portfolioConfig.certifications.map((certificate, index) => (
                <div
                  key={certificate}
                  className="flex items-start gap-4 border-b border-border py-5 first:pt-0 last:border-0 last:pb-0"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft font-mono text-xs font-bold text-primary">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="text-base font-semibold">{certificate}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Liên tục cập nhật kiến thức và thực hành qua dự án.
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-background p-4 text-sm font-medium">
                <BookOpen className="size-5 text-primary" /> Học tập là một phần
                của công việc mỗi ngày.
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <Reveal className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#2563eb] px-7 py-14 text-center text-white sm:px-12 sm:py-20">
            <div className="pulse-soft absolute -top-24 -right-20 -z-10 size-72 rounded-full bg-accent/40 blur-3xl" />
            <Layers3 className="mx-auto size-9 text-white/80" />
            <h2 className="mx-auto mt-6 max-w-3xl text-[clamp(1.875rem,3.5vw,2.75rem)] leading-[1.18] font-semibold tracking-[-0.03em] text-balance">
              Hãy cùng tạo ra một sản phẩm đáng tự hào
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/70">
              Nếu bạn có một ý tưởng, một sản phẩm cần cải thiện hoặc một bài
              toán chưa có lời giải rõ ràng, tôi sẵn sàng lắng nghe.
            </p>
            <ContactDialogTrigger
              className={`${buttonVariants({ variant: "light", size: "lg" })} mt-9`}
            >
              Bắt đầu trò chuyện <ArrowRight />
            </ContactDialogTrigger>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
