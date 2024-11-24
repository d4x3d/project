import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Coffee,
  FileText,
  Users,
  HelpCircle,
  MessageSquare,
  Settings
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Food Catalog', href: '/admin/foods', icon: Coffee },
  { name: 'Blog Posts', href: '/admin/blog', icon: FileText },
  { name: 'Communities', href: '/admin/communities', icon: Users },
  { name: 'FAQs', href: '/admin/faq', icon: HelpCircle },
  { name: 'Feedback', href: '/admin/feedback', icon: MessageSquare },
  { name: 'Settings', href: '/admin/settings', icon: Settings }
];

export default function AdminSidebar() {
  return (
    <div className="w-64 bg-white shadow-sm min-h-screen">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-brand-blue-100 text-brand-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <Icon
                  className="mr-3 h-6 w-6 flex-shrink-0"
                  aria-hidden="true"
                />
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </div>
  );
}