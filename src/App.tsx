import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './pages/Services';
import Foods from './pages/Foods';
import BlogListing from './pages/blog/BlogListing';
import BlogDetail from './pages/blog/BlogDetail';
import About from './pages/About';
import FAQ from './pages/FAQ';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminFoods from './pages/admin/AdminFoods';
import AdminBlog from './pages/admin/AdminBlog';
import AdminCommunities from './pages/admin/AdminCommunities';
import AdminFAQ from './pages/admin/AdminFAQ';
import AdminFeedback from './pages/admin/AdminFeedback';
import AdminSettings from './pages/admin/AdminSettings';
import AdminLogin from './pages/admin/AdminLogin';
import { useAuth } from './contexts/AuthContext';

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Footer />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <Services />
                <Footer />
              </>
            }
          />
          <Route
            path="/foods"
            element={
              <>
                <Navbar />
                <Foods />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Navbar />
                <BlogListing />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <>
                <Navbar />
                <BlogDetail />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/faq"
            element={
              <>
                <Navbar />
                <FAQ />
                <Footer />
              </>
            }
          />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          <Route
            path="/admin"
            element={
              isAuthenticated ? (
                <AdminLayout />
              ) : (
                <Navigate to="/admin/login" replace />
              )
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="foods" element={<AdminFoods />} />
            <Route path="blog" element={<AdminBlog />} />
            <Route path="communities" element={<AdminCommunities />} />
            <Route path="faq" element={<AdminFAQ />} />
            <Route path="feedback" element={<AdminFeedback />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}