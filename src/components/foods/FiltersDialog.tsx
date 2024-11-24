interface FiltersDialogProps {
  isOpen: boolean;
  onClose: () => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

export default function FiltersDialog({
  isOpen,
  onClose,
  priceRange,
  onPriceRangeChange,
}: FiltersDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-xl font-semibold text-[#3E2723] mb-4">Filters</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#3E2723] mb-2">
            Price Range (${priceRange[0]} - ${priceRange[1]})
          </label>
          <div className="space-y-4">
            <input
              type="range"
              min="0"
              max="50"
              value={priceRange[0]}
              onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
              className="w-full accent-[#8D6E63]"
            />
            <input
              type="range"
              min="0"
              max="50"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
              className="w-full accent-[#8D6E63]"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#8D6E63] rounded-lg hover:bg-[#EFEBE9] text-[#3E2723]"
          >
            Close
          </button>
          <button
            onClick={() => {
              onPriceRangeChange([0, 50]);
              onClose();
            }}
            className="px-4 py-2 bg-[#8D6E63] text-white rounded-lg hover:bg-[#795548]"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}