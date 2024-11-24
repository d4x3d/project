import { useState } from 'react';
import {
  Search,
  Plus,
  Filter,
  Edit2,
  Trash2,
  Eye,
  Coffee,
  Image as ImageIcon
} from 'lucide-react';
import type { Food } from '../../types';

// Sample data - replace with actual API call
const foodItems: Food[] = [
  {
    _id: '1',
    name: 'Special Jollof Rice',
    category: 'rice',
    description: 'Aromatic rice cooked in rich tomato sauce with special spices',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3',
    preparationTime: '30 mins',
    isAvailable: true,
    createdAt: '2024-03-15T10:30:00Z',
    updatedAt: '2024-03-15T10:30:00Z'
  }
];

interface FoodFormData {
  name: string;
  category: 'rice' | 'swallow' | 'pastry';
  description: string;
  price: number;
  preparationTime: string;
  image: string;
  isAvailable: boolean;
}

export default function AdminFoods() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [formData, setFormData] = useState<FoodFormData>({
    name: '',
    category: 'rice',
    description: '',
    price: 0,
    preparationTime: '',
    image: '',
    isAvailable: true
  });

  const handleEdit = (food: Food) => {
    setSelectedFood(food);
    setFormData({
      name: food.name,
      category: food.category,
      description: food.description,
      price: food.price,
      preparationTime: food.preparationTime,
      image: food.image,
      isAvailable: food.isAvailable
    });
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (selectedFood) {
        // Update existing food
        console.log('Updating food:', selectedFood._id, formData);
      } else {
        // Create new food
        console.log('Creating new food:', formData);
      }
      setShowModal(false);
      setSelectedFood(null);
      resetForm();
    } catch (error) {
      console.error('Error saving food:', error);
    }
  };

  const handleDelete = async (foodId: string) => {
    if (window.confirm('Are you sure you want to delete this food item?')) {
      try {
        console.log('Deleting food:', foodId);
      } catch (error) {
        console.error('Error deleting food:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      category: 'rice',
      description: '',
      price: 0,
      preparationTime: '',
      image: '',
      isAvailable: true
    });
  };

  const filteredFoods = foodItems.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || food.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Food Catalog</h1>
          <p className="text-gray-600">Manage your food items</p>
        </div>
        <button
          onClick={() => {
            setSelectedFood(null);
            resetForm();
            setShowModal(true);
          }}
          className="inline-flex items-center px-4 py-2 bg-brand-blue-600 text-white rounded-lg hover:bg-brand-blue-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Food Item
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search food items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
        >
          <option value="all">All Categories</option>
          <option value="rice">Rice Family</option>
          <option value="swallow">Swallows</option>
          <option value="pastry">Pastries</option>
        </select>
      </div>

      {/* Food Items Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Food Item
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Updated
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredFoods.map((food) => (
              <tr key={food._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {food._id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-lg object-cover"
                        src={food.image}
                        alt={food.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {food.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {food.description}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {food.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${food.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      food.isAvailable
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {food.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(food.updatedAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => handleEdit(food)}
                      className="text-brand-blue-600 hover:text-brand-blue-900"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Food Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedFood ? 'Edit Food Item' : 'Add New Food Item'}
              </h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedFood(null);
                  resetForm();
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Food Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                  rows={3}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as 'rice' | 'swallow' | 'pastry' })}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="rice">Rice Family</option>
                    <option value="swallow">Swallows</option>
                    <option value="pastry">Pastries</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Preparation Time
                </label>
                <input
                  type="text"
                  value={formData.preparationTime}
                  onChange={(e) => setFormData({ ...formData, preparationTime: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Image URL
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isAvailable"
                  checked={formData.isAvailable}
                  onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })}
                  className="h-4 w-4 text-brand-blue-600 focus:ring-brand-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isAvailable" className="ml-2 block text-sm text-gray-900">
                  Available for ordering
                </label>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setSelectedFood(null);
                    resetForm();
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-blue-600 text-white rounded-lg hover:bg-brand-blue-700"
                >
                  {selectedFood ? 'Save Changes' : 'Add Food Item'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}