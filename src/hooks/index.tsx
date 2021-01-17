import React, { createContext, useCallback, useContext, useState } from 'react';

interface AuthContextData {
  user: string;
  signIn(user: string): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('@w3lcome:user');

    if (user) {
      return user;
    }

    return '';
  });

  const signIn = useCallback(user => {
    localStorage.setItem('@w3lcome:user', user);

    setData(user);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@w3lcome:user');

    setData('');
  }, []);

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
