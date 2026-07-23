import { Outlet } from "react-router";
import Header from "@/layouts/Header"
import Footer from "@/layouts/Footer"

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50">
      {/* Header dùng chung */}
      <Header />

      {/* Nội dung trang sẽ tự động thay đổi tại đây dựa theo Route */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer dùng chung */}
      <Footer />
    </div>
  );
};

export default RootLayout;