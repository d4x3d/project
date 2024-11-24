interface Category {
  id: string;
  name: string;
  description: string;
}

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onSelect: (categoryId: string) => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onSelect,
}: CategoryTabsProps) {
  return (
    <div className="mb-12">
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className={`
              flex flex-col items-start px-6 py-3 rounded-lg whitespace-nowrap transition-colors
              ${
                activeCategory === category.id
                  ? 'bg-[#8D6E63] text-white'
                  : 'bg-white text-[#3E2723] hover:bg-[#EFEBE9]'
              }
            `}
          >
            <span className="font-medium">{category.name}</span>
            <span className="text-sm opacity-80 mt-1">{category.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}