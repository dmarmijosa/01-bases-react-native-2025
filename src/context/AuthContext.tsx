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
  isChecking: boolean | string;
}

interface User {
  nombre: string;
  email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.checking);
  useEffect(() => {
    setTimeout(() => {
      return setStatus(AuthStatus.unauthenticated);
    }, 1500);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        status: status,
        isChecking: status === AuthStatus.checking,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
