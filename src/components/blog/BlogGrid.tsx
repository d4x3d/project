import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../../types';

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {posts.map((post) => (
        <article
          key={post.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <Link to={`/blog/${post.id}`}>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
            </div>
            <Link to={`/blog/${post.id}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-brand-blue-600">
                {post.title}
              </h3>
            </Link>
            <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-brand-blue-600 hover:text-brand-blue-700"
              >
                Read More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}