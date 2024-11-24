import { useState } from 'react';
import {
  Users,
  Plus,
  Edit2,
  Trash2,
  MessageSquare,
  Settings,
  Link as LinkIcon
} from 'lucide-react';
import type { Community } from '../../types';

// Sample data - replace with actual API call
const communities: Community[] = [
  {
    _id: '1',
    title: 'Educational Resources',
    description: 'A space for lifelong learners. Access curated educational resources, participate in discussions, and grow your knowledge base with experts and peers.',
    icon: Users,
    color: 'orange',
    benefits: [
      'Exclusive access to learning materials',
      'Invitations to webinars and discussions',
      'Networking with learners and educators'
    ],
    whatsappLink: '#',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    isActive: true,
    createdAt: '2024-03-15T10:30:00Z',
    updatedAt: '2024-03-15T10:30:00Z'
  }
];

interface CommunityFormData {
  title: string;
  description: string;
  benefits: string[];
  whatsappLink: string;
  image: string;
  isActive: boolean;
}

export default function AdminCommunities() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);
  const [formData, setFormData] = useState<CommunityFormData>({
    title: '',
    description: '',
    benefits: [''],
    whatsappLink: '',
    image: '',
    isActive: true
  });

  const handleEdit = (community: Community) => {
    setSelectedCommunity(community);
    setFormData({
      title: community.title,
      description: community.description,
      benefits: community.benefits,
      whatsappLink: community.whatsappLink,
      image: community.image,
      isActive: community.isActive
    });
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (selectedCommunity) {
        // Update existing community
        console.log('Updating community:', selectedCommunity._id, formData);
      } else {
        // Create new community
        console.log('Creating new community:', formData);
      }
      setShowModal(false);
      setSelectedCommunity(null);
      resetForm();
    } catch (error) {
      console.error('Error saving community:', error);
    }
  };

  const handleDelete = async (communityId: string) => {
    if (window.confirm('Are you sure you want to delete this community?')) {
      try {
        console.log('Deleting community:', communityId);
      } catch (error) {
        console.error('Error deleting community:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      benefits: [''],
      whatsappLink: '',
      image: '',
      isActive: true
    });
  };

  const addBenefit = () => {
    setFormData(prev => ({
      ...prev,
      benefits: [...prev.benefits, '']
    }));
  };

  const removeBenefit = (index: number) => {
    setFormData(prev => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index)
    }));
  };

  const updateBenefit = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      benefits: prev.benefits.map((benefit, i) => i === index ? value : benefit)
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Communities</h1>
          <p className="text-gray-600">Manage your lifestyle communities</p>
        </div>
        <button
          onClick={() => {
            setSelectedCommunity(null);
            resetForm();
            setShowModal(true);
          }}
          className="inline-flex items-center px-4 py-2 bg-brand-blue-600 text-white rounded-lg hover:bg-brand-blue-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Community
        </button>
      </div>

      {/* Communities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {communities.map((community) => {
          const Icon = community.icon;
          return (
            <div
              key={community._id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={community.image}
                  alt={community.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg bg-${community.color}-100`}>
                        <Icon className={`h-6 w-6 text-${community.color}-600`} />
                      </div>
                      <h3 className="ml-3 text-xl font-semibold text-white">
                        {community.title}
                      </h3>
                    </div>
                    <span className="text-xs text-white bg-black/50 px-2 py-1 rounded">
                      ID: {community._id}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{community.description}</p>
                <div className="space-y-2 mb-6">
                  {community.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className={`h-1.5 w-1.5 rounded-full bg-${community.color}-500 mr-2`} />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(community)}
                      className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                      <Settings className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(community._id)}
                      className="p-2 text-red-600 hover:text-red-900 rounded-lg hover:bg-red-50"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`mr-4 px-2 py-1 text-xs rounded-full ${
                        community.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {community.isActive ? 'Active' : 'Inactive'}
                    </span>
                    <a
                      href={community.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-brand-blue-600 hover:text-brand-blue-700"
                    >
                      <LinkIcon className="h-5 w-5 mr-1" />
                      WhatsApp Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add/Edit Community Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedCommunity ? 'Edit Community' : 'Create New Community'}
              </h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedCommunity(null);
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
                  Community Name
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Benefits
                </label>
                <div className="space-y-2">
                  {formData.benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={benefit}
                        onChange={(e) => updateBenefit(index, e.target.value)}
                        className="flex-1 rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                        placeholder="Enter benefit"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => removeBenefit(index)}
                        className="p-2 text-red-600 hover:text-red-900 rounded-lg hover:bg-red-50"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addBenefit}
                    className="inline-flex items-center text-brand-blue-600 hover:text-brand-blue-700"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Benefit
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  WhatsApp Link
                </label>
                <input
                  type="url"
                  value={formData.whatsappLink}
                  onChange={(e) => setFormData({ ...formData, whatsappLink: e.target.value })}
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
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="h-4 w-4 text-brand-blue-600 focus:ring-brand-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">
                  Active Community
                </label>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setSelectedCommunity(null);
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
                  {selectedCommunity ? 'Save Changes' : 'Create Community'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}