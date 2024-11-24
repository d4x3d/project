import { useState } from 'react';
import { Search, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    category: 'Communities',
    questions: [
      {
        q: 'How do I join a community?',
        a: 'You can join any of our communities by clicking the "Join on WhatsApp" button on the respective community card. You\'ll be redirected to WhatsApp to join the group.'
      },
      {
        q: 'Are the communities free to join?',
        a: 'Yes, all our WhatsApp communities are completely free to join. We believe in making knowledge and support accessible to everyone.'
      }
    ]
  },
  {
    category: 'Food Services',
    questions: [
      {
        q: 'How do I place a food order?',
        a: 'You can browse our food menu and place orders directly through our website. Simply select the items you want and proceed to checkout.'
      },
      {
        q: 'What are your delivery areas?',
        a: 'We currently deliver to select areas. You can check if we deliver to your location during the checkout process.'
      }
    ]
  },
  {
    category: 'Membership',
    questions: [
      {
        q: 'Do I need to create an account?',
        a: 'While you can browse our website without an account, creating one gives you access to personalized features and order history.'
      },
      {
        q: 'How can I reset my password?',
        a: 'You can reset your password by clicking the "Forgot Password" link on the login page and following the instructions sent to your email.'
      }
    ]
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('Communities');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);

  const toggleQuestion = (question: string) => {
    setExpandedQuestions(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* FAQ Hero Section */}
      <section className="relative h-[300px] bg-brand-blue-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/90 to-brand-blue-800/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="FAQ Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Find answers to common questions about our services and community
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {faqs.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category.category
                  ? 'bg-brand-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.map((category) => (
            <div
              key={category.category}
              className={category.category === activeCategory ? 'block' : 'hidden'}
            >
              {category.questions.map((faq) => (
                <div key={faq.q} className="mb-4">
                  <button
                    onClick={() => toggleQuestion(faq.q)}
                    className="w-full flex items-center justify-between p-6 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.q}</span>
                    {expandedQuestions.includes(faq.q) ? (
                      <Minus className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedQuestions.includes(faq.q) && (
                    <div className="p-6 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}