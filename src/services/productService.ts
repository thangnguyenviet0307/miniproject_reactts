import type { CategoryItem, Product, ProductsResponse } from "@/types/product";
import axios from "axios";


// Khởi tạo thực thể Axios sử dụng baseURL từ file .env
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 1. API lấy danh mục sản phẩm
 * Đường dẫn: https://dummyjson.com/docs/products#products-categories
 */
export const fetchCategories = async (): Promise<CategoryItem[]> => {
  const response = await API.get<CategoryItem[]>("/products/categories");
  return response.data;
};

/**
 * 2. API lấy tất cả sản phẩm (Có phân trang bằng limit và skip)
 * Sử dụng khi người dùng CHƯA chọn danh mục nào
 * Đường dẫn: https://dummyjson.com/docs/products#products-limit_skip
 */
export const fetchAllProducts = async (limit: number, skip: number): Promise<ProductsResponse> => {
  const response = await API.get<ProductsResponse>("/products", {
    params: { 
      limit, 
      skip 
    },
  });
  return response.data;
};

/**
 * 3. API lấy sản phẩm tương ứng với danh mục đang chọn (Có phân trang)
 * Đường dẫn: https://dummyjson.com/docs/products#products-category
 */
export const fetchProductsByCategory = async (
  categorySlug: string,
  limit: number,
  skip: number
): Promise<ProductsResponse> => {
  const response = await API.get<ProductsResponse>(`/products/category/${categorySlug}`, {
    params: { 
      limit, 
      skip 
    },
  });
  return response.data;
};

/**
 * 4. API lấy thông tin chi tiết của 1 sản phẩm bằng ID
 * Đường dẫn: https://dummyjson.com/docs/products#products-single
 */
export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await API.get<Product>(`/products/${id}`);
  return response.data;
};