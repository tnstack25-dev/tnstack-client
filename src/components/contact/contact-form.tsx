"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const fieldClassName =
  "mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/10";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
      companyWebsite: "",
    },
  });

  function onSubmit() {
    toast.info("Form đã hợp lệ. Tính năng gửi sẽ được kết nối API sau.");
  }

  return (
    <form
      className="rounded-4xl border border-border bg-background p-6 shadow-xl shadow-dark/5 sm:p-8"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="flex items-start justify-between gap-5 border-b border-border pb-6">
        <div>
          <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
            Thông tin dự án
          </p>
          <h2 className="mt-2 text-2xl font-semibold">
            Bạn đang muốn đạt được điều gì?
          </h2>
        </div>
        {/* <span className="hidden size-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary sm:grid">
          <ArrowUpRight className="size-5" />
        </span> */}
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Họ và tên" error={errors.name?.message}>
          <input
            {...register("name")}
            className={cn(fieldClassName, errors.name && "border-accent")}
            placeholder="Nguyễn Văn A"
            autoComplete="name"
          />
        </Field>
        <Field
          label="Email công việc (không bắt buộc)"
          error={errors.email?.message}
        >
          <input
            {...register("email")}
            type="email"
            className={cn(fieldClassName, errors.email && "border-accent")}
            placeholder="ban@congty.vn"
            autoComplete="email"
          />
        </Field>
        <Field label="Số điện thoại" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            className={cn(fieldClassName, errors.phone && "border-accent")}
            placeholder="0900 000 000"
            autoComplete="tel"
          />
        </Field>
        <Field label="Bạn cần hỗ trợ về" error={errors.service?.message}>
          <select
            {...register("service")}
            className={cn(fieldClassName, errors.service && "border-accent")}
            defaultValue=""
          >
            <option value="" disabled>
              Chọn một dịch vụ
            </option>
            <option>Thiết kế website</option>
            <option>Landing page quảng cáo</option>
            <option>Quảng cáo đa nền tảng</option>
            <option>SEO & Content</option>
            <option>Tư vấn tổng thể</option>
          </select>
        </Field>
      </div>

      <div className="sr-only" aria-hidden="true">
        <label>
          Website công ty
          <input
            {...register("companyWebsite")}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="mt-5">
        <Field label="Ngân sách dự kiến" error={errors.budget?.message}>
          <select
            {...register("budget")}
            className={cn(fieldClassName, errors.budget && "border-accent")}
            defaultValue=""
          >
            <option value="" disabled>
              Chọn khoảng ngân sách
            </option>
            <option>Cần được tư vấn</option>
            <option>Dưới 30 triệu</option>
            <option>30–70 triệu</option>
            <option>70–150 triệu</option>
            <option>Trên 150 triệu</option>
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field
          label="Chia sẻ ngắn về mục tiêu hoặc vấn đề hiện tại"
          error={errors.message?.message}
        >
          <textarea
            {...register("message")}
            className={cn(
              fieldClassName,
              "h-36 resize-y py-3",
              errors.message && "border-accent",
            )}
            placeholder="Ví dụ: Chúng tôi cần làm mới website để tăng số khách đăng ký tư vấn..."
          />
        </Field>
      </div>

      <div className="mt-7 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex max-w-sm items-start gap-2 text-xs leading-5 text-muted-foreground">
          <LockKeyhole className="mt-0.5 size-3.5 shrink-0" />
          Thông tin hiện chỉ được kiểm tra trên trình duyệt, chưa được gửi hoặc
          lưu trữ.
        </p>
        <Button type="submit" size="lg">
          Gửi yêu cầu tư vấn <ArrowUpRight />
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      {children}
      {error ? (
        <span
          className="mt-1.5 block text-xs font-medium text-red-600 dark:text-red-400"
          role="alert"
        >
          {error}
        </span>
      ) : null}
    </label>
  );
}
