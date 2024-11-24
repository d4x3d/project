import mongoose from 'mongoose';
import BlogPost from '../models/blogPost.model';
import FoodItem from '../models/foodItem.model';
import CommunityLink from '../models/communityLink.model';

// Replace with your actual connection string
const connectionString = 'mongodb://localhost:27017/yourDatabaseName';

async function connectToDatabase() {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Re-throw the error to be handled by the calling function
  }
}

async function disconnectFromDatabase() {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
    throw error;
  }
}

export { connectToDatabase, disconnectFromDatabase, BlogPost, FoodItem, CommunityLink };
