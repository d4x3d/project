import { useState } from 'react';
import { Save, Bell, Database, Moon, Sun, Upload } from 'lucide-react';

export default function AdminSettings() {
  const [notifications, setNotifications] = useState({
    userFeedback: true,
    communityUpdates: true,
    newOrders: true
  });
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [siteSettings, setSiteSettings] = useState({
    siteName: 'Dr. Chef Community',
    siteDescription: 'Where Food Meets Lifestyle Excellence',
    primaryColor: '#3B82F6',
    secondaryColor: '#8B5CF6'
  });

  const handleBackup = () => {
    // In a real app, implement backup functionality
    console.log('Backing up data...');
  };

  const handleRestore = () => {
    // In a real app, implement restore functionality
    console.log('Restoring data...');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your website settings and preferences</p>
      </div>

      {/* General Settings */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Site Name
            </label>
            <input
              type="text"
              value={siteSettings.siteName}
              onChange={(e) => setSiteSettings(prev => ({ ...prev, siteName: e.target.value }))}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Site Description
            </label>
            <textarea
              value={siteSettings.siteDescription}
              onChange={(e) => setSiteSettings(prev => ({ ...prev, siteDescription: e.target.value }))}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
              rows={3}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Primary Color
              </label>
              <input
                type="color"
                value={siteSettings.primaryColor}
                onChange={(e) => setSiteSettings(prev => ({ ...prev, primaryColor: e.target.value }))}
                className="mt-1 block w-full h-10 rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Secondary Color
              </label>
              <input
                type="color"
                value={siteSettings.secondaryColor}
                onChange={(e) => setSiteSettings(prev => ({ ...prev, secondaryColor: e.target.value }))}
                className="mt-1 block w-full h-10 rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Site Logo
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-brand-blue-600 hover:text-brand-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-blue-500">
                    <span>Upload a file</span>
                    <input type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">User Feedback</h3>
              <p className="text-sm text-gray-500">Get notified when users submit feedback</p>
            </div>
            <button
              onClick={() => setNotifications(prev => ({ ...prev, userFeedback: !prev.userFeedback }))}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2 ${
                notifications.userFeedback ? 'bg-brand-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  notifications.userFeedback ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Community Updates</h3>
              <p className="text-sm text-gray-500">Get notified about community activities</p>
            </div>
            <button
              onClick={() => setNotifications(prev => ({ ...prev, communityUpdates: !prev.communityUpdates }))}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2 ${
                notifications.communityUpdates ? 'bg-brand-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  notifications.communityUpdates ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">New Orders</h3>
              <p className="text-sm text-gray-500">Get notified when new orders are placed</p>
            </div>
            <button
              onClick={() => setNotifications(prev => ({ ...prev, newOrders: !prev.newOrders }))}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2 ${
                notifications.newOrders ? 'bg-brand-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  notifications.newOrders ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Data Management */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Data Management</h2>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <button
              onClick={handleBackup}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500"
            >
              <Database className="h-5 w-5 mr-2 text-gray-500" />
              Backup Data
            </button>
            <button
              onClick={handleRestore}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500"
            >
              <Upload className="h-5 w-5 mr-2 text-gray-500" />
              Restore Data
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Last backup: Never
          </p>
        </div>
      </div>

      {/* Theme Settings */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Theme Settings</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme('light')}
            className={`inline-flex items-center px-4 py-2 rounded-lg ${
              theme === 'light'
                ? 'bg-brand-blue-100 text-brand-blue-600'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Sun className="h-5 w-5 mr-2" />
            Light Mode
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`inline-flex items-center px-4 py-2 rounded-lg ${
              theme === 'dark'
                ? 'bg-brand-blue-100 text-brand-blue-600'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Moon className="h-5 w-5 mr-2" />
            Dark Mode
          </button>
        </div>
      </div>

      {/* Save Changes */}
      <div className="flex justify-end">
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-brand-blue-600 hover:bg-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500">
          <Save className="h-5 w-5 mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
}