import { useState } from 'react';
import { Book, Heart, Wallet, ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';
import CommunityCard from '../components/services/CommunityCard';
import BenefitsSection from '../components/services/BenefitsSection';
import GetStartedSteps from '../components/services/GetStartedSteps';
import TestimonialsSlider from '../components/services/TestimonialsSlider';
import FAQSection from '../components/services/FAQSection';
import type { Community } from '../types';

const communities: Community[] = [
  {
    id: 'education',
    title: 'Educational Resources',
    description: 'A space for lifelong learners. Access curated educational resources, participate in discussions, and grow your knowledge base with experts and peers.',
    icon: Book,
    color: 'orange',
    benefits: [
      'Exclusive access to learning materials',
      'Invitations to webinars and discussions',
      'Networking with learners and educators'
    ],
    whatsappLink: '#',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: 'health',
    title: 'Health Talks and Tips',
    description: 'A supportive space for physical and mental well-being. Engage in live health talks, share tips, and stay updated with expert insights on wellness.',
    icon: Heart,
    color: 'green',
    benefits: [
      'Regular expert-led health discussions',
      'Practical wellness tips and resources',
      'Peer support for healthy lifestyle goals'
    ],
    whatsappLink: '#',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: 'digital',
    title: 'Digital Economy Insights',
    description: 'A forward-thinking community for those passionate about the digital world. Learn about cryptocurrency, Web3, and the latest digital trends.',
    icon: Wallet,
    color: 'purple',
    benefits: [
      'Insights into blockchain, crypto, and Web3',
      'Expert advice on navigating the digital economy',
      'Networking with tech-savvy individuals'
    ],
    whatsappLink: '#',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  }
];

const sharedBenefits = [
  {
    title: 'Exclusive Resources',
    description: 'Get access to premium content and resources tailored to your interests',
    icon: CheckCircle
  },
  {
    title: 'Expert Network',
    description: 'Connect with industry experts and like-minded individuals',
    icon: CheckCircle
  },
  {
    title: 'Real-time Updates',
    description: 'Stay informed with the latest trends and discussions in your field',
    icon: CheckCircle
  },
  {
    title: 'Personalized Growth',
    description: 'Receive guidance and insights customized to your journey',
    icon: CheckCircle
  }
];

const faqs = [
  {
    question: 'Can I join more than one community?',
    answer: 'Yes! You can join as many communities as you\'d like to explore different areas of interest and maximize your learning opportunities.'
  },
  {
    question: 'Is there a cost to participate?',
    answer: 'Our WhatsApp communities are completely free to join. We believe in making knowledge and support accessible to everyone.'
  },
  {
    question: 'What can I expect after joining?',
    answer: 'You\'ll receive a welcome message with community guidelines and access to exclusive resources. You can immediately start participating in discussions and connecting with other members.'
  }
];

export default function Services() {
  const [activeSection, setActiveSection] = useState<string>('communities');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-brand-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/90 to-brand-blue-800/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt="Community"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join a Lifestyle Community
              <span className="block text-brand-blue-200">Built for You</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Explore our tailored communities to enhance your health, knowledge, and digital skills. 
              Connect, learn, and thrive with like-minded individuals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection('communities')}
                className="px-8 py-3 bg-white text-brand-blue-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Explore Communities
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Learn About Our Mission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section id="communities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Vibrant Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the community that aligns with your interests and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection benefits={sharedBenefits} />

      {/* How to Get Started */}
      <GetStartedSteps />

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* FAQs */}
      <FAQSection faqs={faqs} />

      {/* Footer CTA */}
      <section className="py-20 bg-brand-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Be a part of the Dr. Chef Lifestyle Communities
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your journey today and connect with like-minded individuals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {communities.map((community) => (
              <a
                key={community.id}
                href={community.whatsappLink}
                className={`inline-flex items-center px-6 py-3 rounded-lg text-white transition-colors ${
                  community.id === 'education'
                    ? 'bg-orange-500 hover:bg-orange-600'
                    : community.id === 'health'
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-purple-500 hover:bg-purple-600'
                }`}
              >
                Join {community.title}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}