# TNStack Client

Website dịch vụ thiết kế website, quảng cáo số và SEO, xây dựng bằng Next.js App Router, React, TypeScript và Tailwind CSS.

## Bắt đầu

Yêu cầu Node.js 20.9 trở lên. Tạo file môi trường và chạy development server:

```bash
cp .env.example .env.local
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev          # Development server
npm run build        # Production build (webpack)
npm run typecheck    # Kiểm tra TypeScript
npm run lint         # Kiểm tra ESLint
npm run format       # Format source code
npm run format:check # Kiểm tra format
npm run check        # Chạy typecheck, lint và format:check
```

## Cấu trúc chính

- `src/app/`: route, layout, metadata, sitemap và robots.
- `src/components/home/`: các section của trang chủ.
- `src/components/layout/`: các thành phần layout dùng chung.
- `src/components/ui/`: UI primitive có thể tái sử dụng.
- `src/config/`: cấu hình môi trường và thông tin website.
- `src/lib/`: helper dùng chung.

## Package nền

- `react-hook-form`, `zod`, `@hookform/resolvers`: form và validation.
- `class-variance-authority`, `clsx`, `tailwind-merge`: xây dựng UI component.
- `lucide-react`: icon.
- `motion`: animation khi cần.
- `sonner`: toast notification.

Trước khi deploy:

- Cập nhật domain và API trong `.env.local` theo `.env.example`.
- Cập nhật email, số điện thoại và đường dẫn Zalo tại `src/config/site.ts`.
- Kết nối hàm `onSubmit` trong contact form với API tiếp nhận lead của backend.
