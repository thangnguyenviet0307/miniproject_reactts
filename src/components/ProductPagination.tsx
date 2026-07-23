import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const ProductPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: ProductPaginationProps) => {
  if (totalPages <= 1) return null;

  // Thuật toán tính toán chuỗi số trang động dựa trên currentPage
  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];

    // Nếu tổng số trang ít (<= 5) -> Hiện toàn bộ (ví dụ: 1 2 3 4 5)
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    // Luôn luôn có trang 1 ở đầu
    pages.push(1);

    // Tính khoảng trang xung quanh trang hiện tại
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    // Điều chỉnh nếu trang hiện tại ở quá gần đầu
    if (currentPage <= 3) {
      start = 2;
      end = 4;
    }

    // Điều chỉnh nếu trang hiện tại ở quá gần cuối
    if (currentPage >= totalPages - 2) {
      start = totalPages - 3;
      end = totalPages - 1;
    }

    // Thêm dấu ... phía trước nếu start > 2
    if (start > 2) {
      pages.push("ellipsis");
    }

    // Thêm các trang ở giữa
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Thêm dấu ... phía sau nếu end < totalPages - 1
    if (end < totalPages - 1) {
      pages.push("ellipsis");
    }

    // Luôn luôn có trang cuối ở tận cùng
    pages.push(totalPages);

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center w-full my-8">
      <Pagination>
        <PaginationContent className="flex-wrap justify-center gap-1">
          {/* NÚT MŨI TÊN TRÁI (Lùi lại) */}
          <PaginationItem>
            <PaginationPrevious
              aria-label="Go to previous page"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) onPageChange(currentPage - 1);
              }}
              className={`cursor-pointer ${
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <span className="sr-only">Previous Page</span>
            </PaginationPrevious>
          </PaginationItem>

          {/* HIỂN THỊ CHUỖI SỐ TRANG ĐỘNG */}
          {pageNumbers.map((item, index) => {
            if (item === "ellipsis") {
              return (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }

            return (
              <PaginationItem key={item}>
                <PaginationLink
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange(item);
                  }}
                  isActive={currentPage === item}
                  className="cursor-pointer"
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* NÚT MŨI TÊN PHẢI (Tiến lên) */}
          <PaginationItem>
            <PaginationNext
              aria-label="Go to next page"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) onPageChange(currentPage + 1);
              }}
              className={`cursor-pointer ${
                currentPage === totalPages ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <span className="sr-only">Next Page</span>
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};