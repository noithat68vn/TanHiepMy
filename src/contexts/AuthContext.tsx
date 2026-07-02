import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Role = 'admin' | 'guest';

interface AuthContextType {
  role: Role;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>(() => {
    return (localStorage.getItem('user-role') as Role) || 'guest';
  });

  useEffect(() => {
    localStorage.setItem('user-role', role);
  }, [role]);

  const login = (password: string) => {
    // Simple hardcoded password for admin
    if (password === 'admin123') { 
      setRole('admin');
      return true;
    }
    return false;
  };

  const logout = () => {
    setRole('guest');
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
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
