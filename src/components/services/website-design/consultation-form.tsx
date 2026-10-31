"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Vui lòng nhập họ và tên."),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+().\s-]{8,20}$/, "Số điện thoại chưa đúng định dạng."),
  email: z.union([z.literal(""), z.email("Email chưa đúng định dạng.")]),
  service: z.string().min(1, "Vui lòng chọn dịch vụ."),
  message: z
    .string()
    .trim()
    .max(2000, "Nội dung không được vượt quá 2.000 ký tự."),
  companyWebsite: z.string().max(0).optional(),
});
type Values = z.infer<typeof schema>;

export function ConsultationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "Thiết kế website",
      message: "",
      companyWebsite: "",
    },
  });
  async function onSubmit() {
    setError("root", {
      message:
        "Biểu mẫu đã hợp lệ nhưng chưa được gửi vì API chưa được kết nối. Vui lòng liên hệ Hotline hoặc Zalo.",
    });
  }
  const field =
    "h-10 w-full rounded-lg border border-[var(--service-accent)]/15 bg-[var(--service-bg)] px-3 text-xs text-white outline-none transition placeholder:text-[#64748b] focus:border-[var(--service-accent)]/60 focus:ring-2 focus:ring-[var(--service-accent)]/10";
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-[var(--service-accent)]/20 bg-[linear-gradient(145deg,var(--service-surface-strong),var(--service-surface)_45%)] p-5"
    >
      <h2 className="text-lg font-bold text-[var(--service-heading)]">
        Nhận tư vấn thiết kế website
      </h2>
      <p className="mt-2 text-xs leading-5 text-[var(--service-muted)]">
        Để lại thông tin, chúng tôi sẽ liên hệ tư vấn giải pháp phù hợp.
      </p>
      <div className="mt-5 space-y-3">
        <Field error={errors.name?.message}>
          <input
            {...register("name")}
            aria-label="Họ và tên"
            className={field}
            placeholder="Họ và tên *"
            autoComplete="name"
          />
        </Field>
        <Field error={errors.phone?.message}>
          <input
            {...register("phone")}
            aria-label="Số điện thoại"
            className={field}
            placeholder="Số điện thoại *"
            type="tel"
            autoComplete="tel"
          />
        </Field>
        <Field error={errors.email?.message}>
          <input
            {...register("email")}
            aria-label="Email"
            className={field}
            placeholder="Email"
            type="email"
            autoComplete="email"
          />
        </Field>
        <Field error={errors.service?.message}>
          <select
            {...register("service")}
            aria-label="Dịch vụ quan tâm"
            className={field}
          >
            <option>Thiết kế website</option>
            <option>Tối ưu website</option>
            <option>Bảo trì website</option>
            <option>Dịch vụ khác</option>
          </select>
        </Field>
        <Field error={errors.message?.message}>
          <textarea
            {...register("message")}
            aria-label="Nội dung yêu cầu"
            className={`${field} h-24 resize-y py-3`}
            placeholder="Nội dung yêu cầu"
          />
        </Field>
        <div className="sr-only" aria-hidden="true">
          <input
            {...register("companyWebsite")}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </div>
      {errors.root ? (
        <p
          role="alert"
          className="mt-3 rounded-lg border border-amber-400/20 bg-amber-400/5 p-3 text-xs leading-5 text-amber-200"
        >
          {errors.root.message}
        </p>
      ) : null}
      <button
        disabled={isSubmitting}
        className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[var(--service-accent)] text-xs font-bold text-[var(--service-on-accent)] transition hover:bg-[var(--service-accent-hover)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Đang kiểm tra..." : "Gửi yêu cầu tư vấn"}
        <ArrowRight className="size-4" />
      </button>
      <p className="mt-3 flex items-center justify-center gap-2 text-[10px] text-[var(--service-muted)]">
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
        <span role="alert" className="mt-1 block text-[10px] text-amber-300">
          {error}
        </span>
      ) : null}
    </label>
  );
}
