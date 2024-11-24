import { useState } from 'react';
import { Send } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-brand-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Dr. Chef
          </h2>
          <p className="text-lg text-brand-blue-100 mb-8">
            Subscribe to our newsletter for the latest recipes, lifestyle tips, and
            exclusive offers.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-white text-brand-blue-600 rounded-lg hover:bg-brand-blue-50 transition-colors"
            >
              Subscribe
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}