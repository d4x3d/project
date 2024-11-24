import HeroSection from './home/HeroSection';
import FeaturedFoods from './home/FeaturedFoods';
import FeaturedServices from './home/FeaturedServices';
import PromoBanner from './home/PromoBanner';
import TestimonialsSection from './home/TestimonialsSection';
import NewsletterSection from './home/NewsletterSection';
import BlogPreview from './home/BlogPreview';

export default function Hero() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturedFoods />
      <FeaturedServices />
      <PromoBanner />
      <TestimonialsSection />
      <BlogPreview />
      <NewsletterSection />
    </div>
  );
}