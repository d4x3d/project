import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Foods', href: '/foods' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ],
  social: [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center mb-8">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-400 hover:text-white px-4 py-2"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center space-x-6 mb-8">
          {navigation.social.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">{item.name}</span>
                <Icon className="h-6 w-6" />
              </a>
            );
          })}
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          {navigation.legal.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm text-gray-400 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Dr. Chef Community. All rights reserved.
        </p>
      </div>
    </footer>
  );
}