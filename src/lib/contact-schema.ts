import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Vui lòng nhập họ tên.").max(100),
  email: z
    .union([z.literal(""), z.email("Email chưa đúng định dạng.")])
    .optional(),
  phone: z
    .string()
    .trim()
    .min(8, "Số điện thoại cần ít nhất 8 ký tự.")
    .max(20, "Số điện thoại quá dài."),
  service: z.string().trim().min(1, "Vui lòng chọn nhu cầu.").max(100),
  budget: z.string().trim().min(1, "Vui lòng chọn ngân sách dự kiến.").max(100),
  message: z
    .string()
    .trim()
    .min(20, "Hãy chia sẻ thêm một chút về mục tiêu của bạn.")
    .max(4000, "Nội dung không được vượt quá 4.000 ký tự."),
  companyWebsite: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
