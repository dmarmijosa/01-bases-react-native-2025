/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

type AuthStatus = "checking" | "authenticated" | "unauthenticated";

const AuthStatus = {
  checking: "checking" as AuthStatus,
  authenticated: "authenticated" as AuthStatus,
  unauthenticated: "unauthenticated" as AuthStatus,
};

interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
  isChecking: boolean;
  isAuthenticated: boolean;
  //Metodos
  loginWithEmailPassword: (email: string, password: string) => void;
  logout: () => void;
}

interface User {
  nombre: string;
  email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.checking);
  const [user, setUser] = useState<User>();
  useEffect(() => {
    setTimeout(() => {
      return setStatus(AuthStatus.unauthenticated);
    }, 1500);
  }, []);

  const loginWithEmailPassword = (email: string, password: string) => {
    console.log(password);
    setUser({
      nombre: "Danny Armijo",
      email: email,
    });
    setStatus(AuthStatus.authenticated);
  };

  const logout = () => {
    setUser(undefined);
    setStatus(AuthStatus.unauthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        status: status,
        user: user,
        isChecking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.authenticated,
        //Metodos
        loginWithEmailPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
