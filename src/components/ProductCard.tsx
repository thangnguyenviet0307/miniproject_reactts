import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// 1. Import interface Product từ file định nghĩa của bạn
import type { Product } from "@/types/product";

// 2. Định nghĩa kiểu dữ liệu cho Props bằng cách dùng trực tiếp interface Product
interface ProductCardProps {
  product: Product; // Sử dụng toàn bộ cấu trúc của Product
  onClick?: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  // Tính toán giá gốc trước khi giảm giá (để hiển thị phần giá gạch ngang)
  const hasDiscount = product.discountPercentage > 0;
  const originalPrice = hasDiscount
    ? Math.round(product.price / (1 - product.discountPercentage / 100))
    : product.price;

  return (
    <Card
      onClick={onClick}
      className="group relative mx-auto w-full max-w-[280px] overflow-hidden rounded-xl border border-slate-100 bg-white transition-all duration-200 hover:shadow-md cursor-pointer"
    >
      {/* Huy hiệu phần trăm giảm giá */}
      {hasDiscount && (
        <div className="absolute top-[-3] right-0 z-30">
          <Badge className="bg-[#ff6700] hover:bg-[#e05a00] text-white font-bold px-2 py-4 text-sm rounded-md border-none shadow-none">
            -{Math.round(product.discountPercentage)}%
          </Badge>
        </div>
      )}

      {/* Ảnh sản phẩm */}
      <CardHeader className="p-0 select-none">
        <div className="w-full aspect-square bg-white flex items-center justify-center p-4 overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      </CardHeader>

      {/* Nội dung thông tin sản phẩm */}
      <CardContent className="p-4 pt-2 text-left space-y-3">
        {/* Tiêu đề sản phẩm */}
        <CardTitle className="text-[15px] font-bold text-[#0f294d] leading-snug tracking-tight line-clamp-2 min-h-[44px] group-hover:text-[#ff6700] transition-colors">
          {product.title}
        </CardTitle>

        {/* Cụm hiển thị giá tiền (Theo đơn vị USD của API) */}
        <div className="flex items-baseline gap-2 pt-1 font-sans">
          <span className="text-[17px] font-extrabold text-[#d93838]">
            ${product.price.toLocaleString()}
          </span>
          {hasDiscount && (
            <span className="text-sm text-slate-400 line-through">
              ${originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
