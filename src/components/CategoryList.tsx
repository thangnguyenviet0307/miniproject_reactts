import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import type { CategoryItem } from "@/types/product";

interface CategoryListProps {
  categories: CategoryItem[];
  selectedCategory: string | null;
  onSelectCategory: (categorySlug: string | null) => void;
}

const CategoryList = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryListProps) => {
  // Hàm xử lý khi click vào một danh mục
  const handleToggleCategory = (slug: string) => {
    if (selectedCategory === slug) {
      onSelectCategory(null);
    } else {
      onSelectCategory(slug);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4 pb-2 border-b border-slate-200 text-slate-800">
        Danh mục sản phẩm
      </h2>

      <FieldGroup className="w-full max-h-[420px] space-y-3 overflow-y-auto pr-2">
        {categories.map((item) => {
          const isChecked = selectedCategory === item.slug;

          return (
            <Field
              key={item.slug}
              orientation="horizontal"
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <Checkbox
                id={`cat-${item.slug}`}
                checked={isChecked}
                onCheckedChange={() => handleToggleCategory(item.slug)}
              />
              <FieldLabel
                htmlFor={`cat-${item.slug}`}
                className={`cursor-pointer text-sm transition-colors ${
                  isChecked
                    ? "font-bold text-[#ff6700]"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.name}
              </FieldLabel>
            </Field>
          );
        })}
      </FieldGroup>
    </div>
  );
};

export default CategoryList;
