export const portfolioConfig = {
  name: "Tên của bạn",
  initials: "YN",
  role: "Full-stack Developer & UI/UX Designer",
  location: "Việt Nam",
  availability: "Sẵn sàng cho dự án phù hợp",
  introduction:
    "Tôi kết hợp tư duy sản phẩm, thiết kế trải nghiệm và kỹ thuật phần mềm để tạo ra những sản phẩm số rõ ràng, nhanh và mang lại giá trị kinh doanh.",
  about: [
    "Tôi yêu thích việc biến những bài toán phức tạp thành trải nghiệm đơn giản. Thay vì bắt đầu bằng công nghệ hoặc xu hướng thiết kế, tôi bắt đầu bằng người dùng, mục tiêu và bối cảnh kinh doanh.",
    "Từ chiến lược, wireframe, giao diện đến code và đo lường, tôi theo đuổi một quy trình end-to-end để mọi quyết định đều nhất quán và có lý do.",
  ],
  highlights: [
    { value: "End-to-end", label: "Từ ý tưởng đến sản phẩm" },
    { value: "Product-first", label: "Ưu tiên người dùng & mục tiêu" },
    { value: "Data-aware", label: "Thiết kế có thể đo lường" },
  ],
  skillGroups: [
    {
      title: "Product & UX",
      description:
        "Nghiên cứu, kiến trúc thông tin, user flow, wireframe và prototype.",
      skills: ["UX Strategy", "UI Design", "Design System", "Prototyping"],
    },
    {
      title: "Frontend",
      description: "Xây giao diện responsive, accessible và tối ưu hiệu năng.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend & Data",
      description:
        "Thiết kế API, xác thực, dữ liệu và nền tảng có thể mở rộng.",
      skills: ["NestJS", "Node.js", "MongoDB", "REST API"],
    },
  ],
  experience: [
    {
      period: "20XX — Hiện tại",
      role: "Vị trí hiện tại của bạn",
      company: "Tên công ty / Dự án",
      description:
        "Mô tả ngắn về vai trò, phạm vi trách nhiệm và tác động bạn tạo ra cho sản phẩm hoặc doanh nghiệp.",
      achievements: [
        "Thành tựu hoặc kết quả nổi bật thứ nhất.",
        "Một cải tiến về sản phẩm, quy trình hoặc hiệu năng.",
        "Đóng góp nổi bật khi làm việc cùng đội ngũ.",
      ],
    },
    {
      period: "20XX — 20XX",
      role: "Vị trí trước đây",
      company: "Tên công ty",
      description:
        "Tóm tắt kinh nghiệm liên quan và những kỹ năng quan trọng bạn đã phát triển trong giai đoạn này.",
      achievements: [
        "Dự án hoặc sản phẩm tiêu biểu đã tham gia.",
        "Kết quả có thể đo lường nếu có.",
      ],
    },
  ],
  education: [
    {
      period: "20XX — 20XX",
      degree: "Tên chuyên ngành / Bằng cấp",
      school: "Tên trường / Học viện",
      description:
        "Thông tin ngắn về chuyên ngành, hoạt động hoặc đồ án nổi bật.",
    },
  ],
  certifications: [
    "Tên chứng chỉ chuyên môn — Đơn vị cấp",
    "Khóa học hoặc chứng nhận nổi bật",
  ],
  projects: [
    {
      type: "Website dịch vụ",
      title: "TNStack Agency Website",
      description:
        "Website dịch vụ tập trung vào trải nghiệm, nội dung chuyển đổi, animation và hệ thống giao diện nhất quán.",
      stack: ["Next.js", "TypeScript", "Motion", "Tailwind CSS"],
      theme: "green",
    },
    {
      type: "Admin Platform",
      title: "Operations Management Portal",
      description:
        "Nền tảng quản trị module hóa với phân quyền, quản lý nội dung và luồng vận hành rõ ràng.",
      stack: ["React", "Redux Toolkit", "Ant Design", "REST API"],
      theme: "blue",
    },
    {
      type: "Backend Architecture",
      title: "Modular Service Platform",
      description:
        "Backend NestJS chú trọng bảo mật, xác thực, RBAC và kiến trúc có thể mở rộng.",
      stack: ["NestJS", "MongoDB", "JWT", "RBAC"],
      theme: "dark",
    },
  ],
} as const;
