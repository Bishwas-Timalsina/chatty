import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [AUTH_TOKEN, setAuthToken] = useState<any>(
    localStorage?.getItem("AUTH_TOKEN")
  );

  useEffect(() => {
    if (AUTH_TOKEN) {
      localStorage.setItem("AUTH_TOKEN", AUTH_TOKEN);
    } else {
      localStorage?.removeItem("AUTH_TOKEN");
    }
  }, [AUTH_TOKEN]);
  console.log(AUTH_TOKEN);

  const AUTH_TOKEN_VALUE = useMemo(
    () => ({
      AUTH_TOKEN,
      setAuthToken,
    }),
    [AUTH_TOKEN]
  );

  return (
    <AuthContext.Provider value={AUTH_TOKEN_VALUE}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
