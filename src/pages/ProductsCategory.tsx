import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import CategoryList from "@/components/CategoryList";
import { ProductCard } from "@/components/ProductCard";
import { ProductPagination } from "@/components/ProductPagination";

import {
  fetchAllProducts,
  fetchCategories,
  fetchProductsByCategory,
} from "@/services/productService";

const ProductsCategory = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const limit = 8;
  const skip = (page - 1) * limit;

  const { data: categories = [], isLoading: isCategoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const {
    data: productsData,
    isLoading: isProductsLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", selectedCategory, page],
    queryFn: () =>
      selectedCategory
        ? fetchProductsByCategory(selectedCategory, limit, skip)
        : fetchAllProducts(limit, skip),
    placeholderData: keepPreviousData,
  });

  const totalPages = productsData
    ? Math.ceil(productsData.total / limit)
    : 0;

  const handleSelectCategory = (slug: string | null) => {
    setSelectedCategory(slug);
    setPage(1);
  };

  return (
    <div className="mx-auto max-w-[1200px] px-4">
      {/* Breadcrumbs */}
      <ul className="my-5 flex items-center gap-2 text-sm">
        <li>
          <a href="/" className="text-slate-600 hover:text-[#ff6700]">
            Home
          </a>
        </li>

        <li className="text-slate-400">›</li>

        <li className="font-semibold text-slate-800">
          Category
        </li>
      </ul>

      <section className="flex flex-col gap-8 md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <section>
            <h2 className="mb-4 font-poppins text-[20px] font-semibold leading-[22px] text-[#ff6700]">
              Bộ lọc
            </h2>

            {isCategoriesLoading ? (
              <p className="text-sm text-slate-500">
                Đang tải danh mục...
              </p>
            ) : (
              <CategoryList
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleSelectCategory}
              />
            )}
          </section>
        </div>

        {/* Main */}
        <div className="flex w-full flex-col md:w-3/4">
          <section>
            <h2 className="mb-6 font-poppins text-[20px] font-semibold leading-[22px] text-[#ff6700]">
              Danh sách sản phẩm
            </h2>

            {isProductsLoading && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="h-[320px] animate-pulse rounded-xl bg-slate-200"
                  />
                ))}
              </div>
            )}

            {isError && (
              <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-600">
                Lỗi tải sản phẩm: {(error as Error).message}
              </div>
            )}

            {/* Product list */}
            {!isProductsLoading && !isError && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {productsData?.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => navigate(`/detail/${product.id}`)}
                  />
                ))}
              </div>
            )}
          </section>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <ProductPagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsCategory;