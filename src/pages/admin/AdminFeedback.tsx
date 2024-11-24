import { useState } from 'react';
import { Search, Mail, Trash2, Check, X, ExternalLink } from 'lucide-react';
import type { Feedback } from '../../types';

// Sample data - replace with actual API call
const feedbackData: Feedback[] = [
  {
    _id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    subject: 'Website Suggestion',
    message: 'I love the new recipe section! Would be great to have a print option.',
    status: 'new',
    createdAt: '2024-03-15T10:30:00Z',
    updatedAt: '2024-03-15T10:30:00Z'
  }
];

export default function AdminFeedback() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'new' | 'in_progress' | 'resolved'>('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null);
  const [adminNotes, setAdminNotes] = useState('');

  const handleViewFeedback = (feedback: Feedback) => {
    setSelectedFeedback(feedback);
    setAdminNotes(feedback.adminNotes || '');
    setShowModal(true);
  };

  const handleUpdateStatus = async (feedbackId: string, newStatus: 'new' | 'in_progress' | 'resolved') => {
    try {
      console.log('Updating feedback status:', feedbackId, newStatus);
      // Update feedback status in the database
    } catch (error) {
      console.error('Error updating feedback status:', error);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedFeedback) return;
    try {
      console.log('Saving admin notes:', selectedFeedback._id, adminNotes);
      // Save admin notes to the database
      setShowModal(false);
      setSelectedFeedback(null);
      setAdminNotes('');
    } catch (error) {
      console.error('Error saving admin notes:', error);
    }
  };

  const handleDelete = async (feedbackId: string) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      try {
        console.log('Deleting feedback:', feedbackId);
        // Delete feedback from the database
      } catch (error) {
        console.error('Error deleting feedback:', error);
      }
    }
  };

  const filteredFeedback = feedbackData.filter(feedback => {
    const matchesSearch = 
      feedback.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || feedback.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">User Feedback</h1>
        <p className="text-gray-600">Manage and respond to user inquiries and feedback</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search feedback..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
          />
        </div>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value as 'all' | 'new' | 'in_progress' | 'resolved')}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="in_progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      {/* Feedback Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredFeedback.map((feedback) => (
              <tr key={feedback._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {feedback._id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-brand-blue-100 flex items-center justify-center">
                        <span className="text-brand-blue-600 font-medium">
                          {feedback.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {feedback.name}
                      </div>
                      <div className="text-sm text-gray-500">{feedback.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{feedback.subject}</div>
                  <div className="text-sm text-gray-500">
                    {feedback.message.substring(0, 50)}...
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      feedback.status === 'new'
                        ? 'bg-yellow-100 text-yellow-800'
                        : feedback.status === 'in_progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {feedback.status === 'new' ? 'New' :
                     feedback.status === 'in_progress' ? 'In Progress' : 'Resolved'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(feedback.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => handleViewFeedback(feedback)}
                      className="text-brand-blue-600 hover:text-brand-blue-900"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(feedback._id)}
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

      {/* View Feedback Modal */}
      {showModal && selectedFeedback && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Feedback Details
              </h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedFeedback(null);
                  setAdminNotes('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                &times;
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700">From</h3>
                <div className="mt-1">
                  <p className="text-sm text-gray-900">{selectedFeedback.name}</p>
                  <p className="text-sm text-gray-600">{selectedFeedback.email}</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700">Subject</h3>
                <p className="mt-1 text-sm text-gray-900">{selectedFeedback.subject}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700">Message</h3>
                <p className="mt-1 text-sm text-gray-900">{selectedFeedback.message}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700">Status</h3>
                <select
                  value={selectedFeedback.status}
                  onChange={(e) => handleUpdateStatus(selectedFeedback._id, e.target.value as 'new' | 'in_progress' | 'resolved')}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                >
                  <option value="new">New</option>
                  <option value="in_progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700">Admin Notes</h3>
                <textarea
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Add internal notes about this feedback..."
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setSelectedFeedback(null);
                    setAdminNotes('');
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Close
                </button>
                <button
                  onClick={handleSaveNotes}
                  className="px-4 py-2 bg-brand-blue-600 text-white rounded-lg hover:bg-brand-blue-700"
                >
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}