import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  tags: [{ type: String }],
  status: { type: String, enum: ['Published', 'Draft'], default: 'Draft' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;
