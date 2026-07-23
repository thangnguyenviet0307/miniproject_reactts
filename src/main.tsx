import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // 1. Thêm dòng này
import "./index.css";
import App from "./App.tsx";

// 2. Khởi tạo một thực thể queryClient ngoài component để tránh bị re-render làm mất cache
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Tắt tự động refetch khi người dùng chuyển đổi tab (tùy chọn)
      retry: 1, // Số lần thử gọi lại API nếu xảy ra lỗi mạng (mặc định là 3)
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 3. Bao bọc App bằng Provider và truyền queryClient vừa tạo vào */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
