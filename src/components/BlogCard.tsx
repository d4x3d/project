import type { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="h-48 w-full object-cover"
        src={post.image}
        alt={post.title}
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        <h2 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h2>
        <p className="mt-2 text-gray-500 line-clamp-3">{post.content}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}