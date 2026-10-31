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
  service: z.string().min(1),
  message: z.string().max(2000),
  companyWebsite: z.string().max(0).optional(),
});
type Values = z.infer<typeof schema>;
export function OptimizationConsultationForm() {
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
      service: "Tối ưu website (SEO & Hiệu suất)",
      message: "",
      companyWebsite: "",
    },
  });
  async function submit() {
    setError("root", {
      message:
        "Biểu mẫu đã hợp lệ nhưng chưa được gửi vì API chưa được kết nối. Vui lòng liên hệ Hotline hoặc Zalo.",
    });
  }
  const field =
    "h-10 w-full rounded-lg border border-[var(--service-accent)]/15 bg-[var(--service-bg)] px-3 text-xs text-white outline-none focus:border-[var(--service-accent)]/60";
  return (
    <form
      onSubmit={handleSubmit(submit)}
      noValidate
      className="rounded-2xl border border-[var(--service-accent)]/20 bg-[linear-gradient(145deg,var(--service-surface-strong),var(--service-surface)_45%)] p-5"
    >
      <h2 className="text-lg font-bold">Nhận tư vấn tối ưu website</h2>
      <p className="mt-2 text-xs leading-5 text-[var(--service-muted)]">
        Để lại thông tin, chúng tôi sẽ liên hệ tư vấn giải pháp phù hợp.
      </p>
      <div className="mt-5 space-y-3">
        <Field e={errors.name?.message}>
          <input
            {...register("name")}
            aria-label="Họ và tên"
            className={field}
            placeholder="Họ và tên *"
          />
        </Field>
        <Field e={errors.phone?.message}>
          <input
            {...register("phone")}
            aria-label="Số điện thoại"
            className={field}
            placeholder="Số điện thoại *"
          />
        </Field>
        <Field e={errors.email?.message}>
          <input
            {...register("email")}
            aria-label="Email"
            className={field}
            placeholder="Email"
          />
        </Field>
        <select
          {...register("service")}
          aria-label="Dịch vụ quan tâm"
          className={field}
        >
          <option>Tối ưu website (SEO & Hiệu suất)</option>
          <option>Thiết kế website</option>
          <option>Dịch vụ khác</option>
        </select>
        <textarea
          {...register("message")}
          aria-label="Nội dung yêu cầu"
          className={`${field} h-24 py-3`}
          placeholder="Nội dung yêu cầu"
        />
        <input
          {...register("companyWebsite")}
          className="sr-only"
          tabIndex={-1}
        />
      </div>
      {errors.root ? (
        <p
          role="alert"
          className="mt-3 rounded-lg border border-amber-400/20 p-3 text-xs text-amber-200"
        >
          {errors.root.message}
        </p>
      ) : null}
      <button
        disabled={isSubmitting}
        className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[var(--service-accent)] text-xs font-bold text-[var(--service-on-accent)]"
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
function Field({ children, e }: { children: React.ReactNode; e?: string }) {
  return (
    <label className="block">
      {children}
      {e ? (
        <span role="alert" className="mt-1 block text-[10px] text-amber-300">
          {e}
        </span>
      ) : null}
    </label>
  );
}
