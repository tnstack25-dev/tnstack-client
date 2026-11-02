import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="text-sm font-bold tracking-[0.16em] text-primary uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-[clamp(1.75rem,3vw,2.625rem)] leading-[1.18] font-semibold tracking-[-0.03em] text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-[17px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
