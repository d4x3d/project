import { LucideIcon } from 'lucide-react';

export interface BaseModel {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Food extends BaseModel {
  name: string;
  category: 'rice' | 'swallow' | 'pastry';
  description: string;
  price: number;
  image: string;
  preparationTime: string;
  isAvailable: boolean;
}

export interface BlogPost extends BaseModel {
  title: string;
  content: string;
  author: string;
  status: 'draft' | 'published';
  tags: string[];
  image: string;
  slug: string;
}

export interface Community extends BaseModel {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  benefits: string[];
  whatsappLink: string;
  image: string;
  isActive: boolean;
}

export interface FAQ extends BaseModel {
  question: string;
  answer: string;
  category: string;
  isPublished: boolean;
}

export interface Feedback extends BaseModel {
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'in_progress' | 'resolved';
  adminNotes?: string;
}

export interface ServiceCategory extends BaseModel {
  title: string;
  description: string;
  icon: string;
  color: string;
  image: string;
}

export interface AdminUser extends BaseModel {
  name: string;
  email: string;
  role: 'super_admin' | 'content_manager' | 'support';
  lastLogin: string;
  isActive: boolean;
}