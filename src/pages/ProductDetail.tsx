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

  if (isLoading) {
    return (
      <div className="container mx-auto p-8 text-center text-black animate-pulse font-['Poppins',sans-serif]">
        Đang tải chi tiết sản phẩm...
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="container mx-auto p-8 text-center text-red-500 font-['Poppins',sans-serif]">
        Không tìm thấy sản phẩm!
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 font-['Poppins',sans-serif]">
      {/* Breadcrumbs */}
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
        <li className="font-semibold text-slate-800">{product.title}</li>
      </ul>

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

            <h1 className="text-2xl font-bold !text-black">{product.title}</h1>

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
              <p>
                Đánh giá:{" "}
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <span className="text-yellow-400">
                    <Star fill="currentColor" className="w-5 h-5" />
                  </span>{" "}
                  {product.rating}
                </span>
              </p>
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
    </div>
  );
};

export default ProductDetail;
