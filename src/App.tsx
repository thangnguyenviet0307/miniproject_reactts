import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./layouts/RootLayout";
import ProductsCategory from "./pages/ProductsCategory";
import ProductDetail from "./pages/ProductDetail"; // Trang chi tiết sản phẩm nếu có
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Customer from "./pages/Customer";
import Product from "./pages/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="blog" element={<Blog />} />

          <Route index element={<ProductsCategory />} />

          <Route path="category" element={<ProductsCategory />} />

          <Route path="detail/:id" element={<ProductDetail />} />

          <Route path="product" element={<Product />} />

          <Route path="login" element={<Login />} />

          <Route path="customer" element={<Customer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
