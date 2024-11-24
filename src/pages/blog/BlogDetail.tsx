import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, Share2, MessageSquare, Facebook, Twitter, Linkedin } from 'lucide-react';
import type { BlogPost } from '../../types';

// Sample blog post data (in a real app, this would come from an API)
const blogPost: BlogPost = {
  id: '1',
  title: 'The Art of Perfect Rice: Tips from Professional Chefs',
  content: `
    <h2>Introduction</h2>
    <p>Rice is a staple food that billions of people rely on daily. Yet, cooking perfect rice remains a challenge for many home cooks. In this comprehensive guide, we'll explore professional techniques that will help you achieve perfectly cooked rice every time.</p>

    <h2>The Basics of Rice Cooking</h2>
    <p>Before diving into advanced techniques, it's essential to understand the fundamentals. The basic ratio of water to rice is typically 2:1, but this can vary depending on the type of rice and cooking method.</p>

    <h2>Professional Tips</h2>
    <ul>
      <li>Always rinse your rice before cooking to remove excess starch</li>
      <li>Let the rice rest for 10 minutes after cooking</li>
      <li>Use the right pot size for the amount of rice you're cooking</li>
    </ul>

    <h2>Common Mistakes to Avoid</h2>
    <p>Many home cooks make these common mistakes when preparing rice. Learn what they are and how to avoid them for better results.</p>
  `,
  author: 'Chef John Doe',
  date: '2024-03-15',
  tags: ['cooking-tips', 'rice', 'professional-cooking'],
  image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
};

const relatedPosts: BlogPost[] = [
  {
    id: '2',
    title: 'Essential Kitchen Tools Every Chef Needs',
    content: 'Discover the must-have tools for your kitchen...',
    author: 'Sarah Smith',
    date: '2024-03-14',
    tags: ['kitchen-tools', 'cooking'],
    image: 'https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: '3',
    title: 'Mastering Asian Cuisine',
    content: 'Learn the secrets of authentic Asian cooking...',
    author: 'Chef Lee Wong',
    date: '2024-03-13',
    tags: ['asian-cuisine', 'cooking'],
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  }
];

export default function BlogDetail() {
  const { id } = useParams();
  const [comment, setComment] = useState('');

  const handleShare = (platform: string) => {
    // In a real app, implement proper sharing functionality
    console.log(`Sharing to ${platform}`);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {blogPost.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {blogPost.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(blogPost.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                {blogPost.tags.join(', ')}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose max-w-none mb-12" 
            dangerouslySetInnerHTML={{ __html: blogPost.content }} 
          />

          {/* Share Buttons */}
          <div className="border-t border-b border-gray-200 py-4 mb-8">
            <div className="flex items-center gap-4">
              <span className="font-medium text-gray-700">Share this article:</span>
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Twitter className="h-5 w-5 text-blue-400" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Linkedin className="h-5 w-5 text-blue-700" />
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Comments</h3>
            <div className="mb-4">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your thoughts..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                rows={4}
              />
              <button className="mt-2 px-6 py-2 bg-brand-blue-600 text-white rounded-lg hover:bg-brand-blue-700">
                Post Comment
              </button>
            </div>
          </div>

          {/* Related Posts */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group block"
                >
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{post.content}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}