import { useState } from 'react';
import {
  Users,
  Coffee,
  FileText,
  MessageSquare,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Bell
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', users: 400, orders: 240, posts: 20 },
  { name: 'Feb', users: 500, orders: 300, posts: 25 },
  { name: 'Mar', users: 600, orders: 350, posts: 30 },
  { name: 'Apr', users: 800, orders: 450, posts: 35 },
  { name: 'May', users: 1000, orders: 500, posts: 40 }
];

const stats = [
  {
    name: 'Total Users',
    value: '2,543',
    change: '+12.5%',
    trend: 'up',
    icon: Users
  },
  {
    name: 'Food Items',
    value: '156',
    change: '+8.2%',
    trend: 'up',
    icon: Coffee
  },
  {
    name: 'Blog Posts',
    value: '42',
    change: '+23.1%',
    trend: 'up',
    icon: FileText
  },
  {
    name: 'Pending Feedback',
    value: '12',
    change: '-4.3%',
    trend: 'down',
    icon: MessageSquare
  }
];

const recentActivity = [
  {
    id: 1,
    type: 'food',
    title: 'New food item added',
    description: 'Special Jollof Rice',
    time: '2 hours ago'
  },
  {
    id: 2,
    type: 'blog',
    title: 'Blog post published',
    description: 'The Art of Perfect Rice',
    time: '4 hours ago'
  },
  {
    id: 3,
    type: 'feedback',
    title: 'New feedback received',
    description: 'From: John Doe',
    time: '6 hours ago'
  }
];

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState('month');

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, Admin!
          </h1>
          <p className="text-gray-600">Here's what's happening today</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
          >
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <button className="relative p-2 text-gray-400 hover:text-gray-500">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 bg-brand-blue-100 rounded-lg">
                  <Icon className="h-6 w-6 text-brand-blue-600" />
                </div>
                <span
                  className={`flex items-center text-sm ${
                    stat.trend === 'up'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                  )}
                  {stat.change}
                </span>
              </div>
              <p className="mt-4 text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
              <p className="text-gray-600">{stat.name}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Growth Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Growth Overview
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="users"
                  stackId="1"
                  stroke="#3B82F6"
                  fill="#93C5FD"
                />
                <Area
                  type="monotone"
                  dataKey="orders"
                  stackId="1"
                  stroke="#10B981"
                  fill="#6EE7B7"
                />
                <Area
                  type="monotone"
                  dataKey="posts"
                  stackId="1"
                  stroke="#F59E0B"
                  fill="#FCD34D"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center">
                  <div
                    className={`p-2 rounded-lg mr-4 ${
                      activity.type === 'food'
                        ? 'bg-green-100 text-green-600'
                        : activity.type === 'blog'
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}
                  >
                    {activity.type === 'food' ? (
                      <Coffee className="h-5 w-5" />
                    ) : activity.type === 'blog' ? (
                      <FileText className="h-5 w-5" />
                    ) : (
                      <MessageSquare className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {activity.description}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full py-2 text-brand-blue-600 hover:text-brand-blue-700 font-medium">
            View All Activity
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Coffee className="h-6 w-6 text-brand-blue-600 mb-2" />
            <h3 className="font-medium text-gray-900">Add Food Item</h3>
            <p className="text-sm text-gray-600">Create a new food catalog entry</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <FileText className="h-6 w-6 text-brand-blue-600 mb-2" />
            <h3 className="font-medium text-gray-900">Write Blog Post</h3>
            <p className="text-sm text-gray-600">Create new content for the blog</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <MessageSquare className="h-6 w-6 text-brand-blue-600 mb-2" />
            <h3 className="font-medium text-gray-900">View Feedback</h3>
            <p className="text-sm text-gray-600">Check recent user feedback</p>
          </button>
        </div>
      </div>
    </div>
  );
}