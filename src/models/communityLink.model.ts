import mongoose from 'mongoose';

const communityLinkSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  whatsappLink: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const CommunityLink = mongoose.model('CommunityLink', communityLinkSchema);

export default CommunityLink;
