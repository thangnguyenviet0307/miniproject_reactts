import { useParams, useNavigate, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "@/services/productService";
import { Star } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(Number(id)),
    enabled: !!id,
  });

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6 font-['Poppins',sans-serif]">
      {/* 1. BREADCRUMBS LUÔN HIỂN THỊ TRÊN CÙNG */}
      <ul className="breadcrumbs flex items-center gap-2 text-sm text-slate-500 mb-6">
        <li>
          <Link to="/" className="hover:text-[#ff6700]">
            Home
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link to="/category" className="hover:text-[#ff6700]">
            Category
          </Link>
        </li>
        <li>/</li>
        <li className="font-semibold text-slate-800">
          {isLoading
            ? "Đang tải..."
            : isError || !product
              ? "Lỗi sản phẩm"
              : product.title}
        </li>
      </ul>

      {/* 2. HIỂN THỊ THEO TRẠNG THÁI (LOADING / LỖI / DỮ LIỆU THẬT) */}
      {isLoading ? (
        // Khung Skeleton / Loading nằm dưới Breadcrumbs
        <div className="bg-white p-8 rounded-xl border border-slate-200 text-center text-slate-500 animate-pulse">
          <p className="text-lg font-medium">Đang tải thông tin sản phẩm...</p>
        </div>
      ) : isError || !product ? (
        // Khung Báo lỗi nằm dưới Breadcrumbs
        <div className="bg-white p-8 rounded-xl border border-slate-200 text-center space-y-4">
          <p className="text-lg font-semibold text-red-500">
            Không tìm thấy thông tin sản phẩm này!
          </p>
          <button
            onClick={() => navigate(-1)}
            className="bg-[#ff6700] hover:bg-[#e05b00] text-white px-5 py-2 rounded-md font-medium transition-colors"
          >
            Quay lại
          </button>
        </div>
      ) : (
        // Khung chi tiết sản phẩm thật khi tải thành công
        <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-8 shadow-sm">
          {/* Ảnh sản phẩm */}
          <div className="w-full md:w-1/2 flex justify-center bg-slate-50 p-4 rounded-lg">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-80 object-contain"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold text-[#ff6700]">
                {product.category}
              </span>

              <h1 className="text-2xl font-bold !text-black">
                {product.title}
              </h1>

              <div className="text-2xl font-bold text-[#ff6700]">
                ${product.price}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed border-t border-b border-slate-100 py-4">
                {product.description}
              </p>

              <div className="text-sm text-slate-500 space-y-1">
                <p>
                  Thương hiệu:{" "}
                  <span className="font-semibold text-slate-700">
                    {product.brand || "N/A"}
                  </span>
                </p>
                <div className="flex items-center gap-1">
                  <span>Đánh giá:</span>
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <span className="text-yellow-400">
                      <Star fill="currentColor" className="w-4 h-4" />
                    </span>
                    {product.rating}
                  </span>
                </div>
                <p>
                  Kho hàng:{" "}
                  <span className="font-semibold text-slate-700">
                    {product.stock} sản phẩm
                  </span>
                </p>
              </div>
            </div>

            {/* Nút quay lại */}
            <div className="mt-6">
              <button
                onClick={() => navigate(-1)}
                className="bg-[#ff6700] hover:bg-[#e05b00] text-white px-6 py-2 rounded-md font-semibold transition-colors"
              >
                Quay lại
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
