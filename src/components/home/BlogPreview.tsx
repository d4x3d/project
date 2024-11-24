import { Link } from 'react-router-dom';
import type { BlogPost } from '../../types';

const recentPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Perfect Rice: Tips from Professional Chefs',
    content: 'Master the techniques of cooking perfect rice every time with these expert tips...',
    author: 'Chef John Doe',
    date: '2024-03-15',
    tags: ['cooking-tips', 'rice'],
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: '2',
    title: 'Crypto in the Kitchen: Food Industry Meets Web3',
    content: 'Explore how blockchain technology is revolutionizing the food industry...',
    author: 'Sarah Smith',
    date: '2024-03-14',
    tags: ['technology', 'web3'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: '3',
    title: 'Healthy Living: Balancing Food and Fitness',
    content: 'Learn how to maintain a healthy lifestyle while enjoying your favorite foods...',
    author: 'Dr. Jane Wilson',
    date: '2024-03-13',
    tags: ['health', 'wellness'],
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  }
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          <p className="text-lg text-gray-600">Stay updated with the latest insights and tips</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}