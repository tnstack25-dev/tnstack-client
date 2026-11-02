"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Vui lòng nhập họ tên."),
  phone: z.string().regex(/^[0-9+().\s-]{8,20}$/, "Số điện thoại chưa đúng."),
  email: z.union([z.literal(""), z.email("Email chưa đúng.")]),
  industry: z.string().trim().max(120, "Tên lĩnh vực quá dài."),
  message: z.string().max(2000, "Nội dung không quá 2.000 ký tự."),
  trap: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export function GoogleAdsConsultationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      industry: "",
      message: "",
      trap: "",
    },
  });

  async function submit() {
    setError("root", {
      message:
        "Biểu mẫu hợp lệ nhưng chưa được gửi vì API chưa kết nối. Vui lòng gọi Hotline hoặc Zalo.",
    });
  }

  const fieldClass =
    "h-10 w-full rounded-lg border border-[var(--service-accent)]/15 bg-[var(--service-bg)] px-3 text-xs text-white outline-none transition focus:border-[var(--service-accent)]/60 focus-visible:ring-2 focus-visible:ring-[var(--service-accent)]/20";

  return (
    <form
      id="tu-van-google-ads"
      onSubmit={handleSubmit(submit)}
      className="rounded-2xl border border-[var(--service-accent)]/20 bg-gradient-to-br from-[var(--service-surface-strong)] to-[var(--service-surface)] p-5"
    >
      <h2 className="text-lg font-bold">
        Nhận tư vấn chạy{" "}
        <span className="text-[var(--service-accent)]">Google Ads</span>
      </h2>
      <p className="mt-2 text-xs leading-5 text-[var(--service-muted)]">
        Để lại thông tin, chúng tôi sẽ tư vấn chiến lược phù hợp với doanh
        nghiệp của bạn.
      </p>
      <div className="mt-5 space-y-3">
        <Field error={errors.name?.message}>
          <input
            {...register("name")}
            aria-label="Họ và tên"
            autoComplete="name"
            className={fieldClass}
            placeholder="Họ và tên *"
          />
        </Field>
        <Field error={errors.phone?.message}>
          <input
            {...register("phone")}
            aria-label="Số điện thoại"
            autoComplete="tel"
            inputMode="tel"
            className={fieldClass}
            placeholder="Số điện thoại *"
          />
        </Field>
        <Field error={errors.email?.message}>
          <input
            {...register("email")}
            aria-label="Email"
            autoComplete="email"
            inputMode="email"
            className={fieldClass}
            placeholder="Email"
          />
        </Field>
        <Field error={errors.industry?.message}>
          <input
            {...register("industry")}
            aria-label="Lĩnh vực kinh doanh"
            className={fieldClass}
            placeholder="Lĩnh vực kinh doanh"
          />
        </Field>
        <Field error={errors.message?.message}>
          <textarea
            {...register("message")}
            aria-label="Nội dung yêu cầu"
            className={`${fieldClass} h-24 resize-y py-3`}
            placeholder="Nội dung yêu cầu"
          />
        </Field>
        <input
          {...register("trap")}
          aria-hidden="true"
          className="sr-only"
          tabIndex={-1}
        />
      </div>
      {errors.root ? (
        <p role="alert" className="mt-3 text-xs leading-5 text-amber-200">
          {errors.root.message}
        </p>
      ) : null}
      <button
        disabled={isSubmitting}
        className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[var(--service-accent)] text-xs font-bold text-[var(--service-on-accent)] transition hover:bg-[var(--service-accent-hover)] disabled:cursor-not-allowed disabled:opacity-65"
      >
        {isSubmitting ? "Đang kiểm tra..." : "Gửi yêu cầu tư vấn"}
        <ArrowRight className="size-4" />
      </button>
      <p className="mt-3 flex justify-center gap-2 text-[10px] text-[var(--service-muted)]">
        <LockKeyhole className="size-3" />
        Thông tin không được gửi khi chưa có API.
      </p>
    </form>
  );
}

function Field({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      {children}
      {error ? (
        <span className="mt-1 block text-[10px] text-amber-300">{error}</span>
      ) : null}
    </label>
  );
}
