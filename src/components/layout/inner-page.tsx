import { Container } from "@/components/ui/container";

type InnerPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function InnerPage({
  eyebrow,
  title,
  description,
  children,
}: InnerPageProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.12] font-semibold tracking-[-0.035em] text-balance">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {description}
          </p>
          {children ? <div className="mt-10">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
