import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  user: { name: string; email: string; role: string } | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);

  useEffect(() => {
    // Check for existing auth token
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
      // In a real app, validate token and fetch user data
      setUser({
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin'
      });
    }
  }, []);

  const login = async (email: string, password: string) => {
    // In a real app, make API call to validate credentials
    if (email === 'admin@example.com' && password === 'password') {
      const token = 'dummy-token';
      localStorage.setItem('adminToken', token);
      setIsAuthenticated(true);
      setUser({
        name: 'Admin User',
        email,
        role: 'admin'
      });
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}