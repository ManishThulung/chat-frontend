"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ContextType {
  user: any | null;
  accessToken: string | null;
}

const UserContext = createContext<ContextType>({
  user: null,
  accessToken: null,
});

export const useUser = () => {
  return useContext(UserContext);
};

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    const user = userDetails && JSON?.parse(userDetails);
    setUser(user);

    const token: any = localStorage?.getItem("accessToken");
    if (token) {
      setAccessToken(token);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, accessToken }}>
      {children}
    </UserContext.Provider>
  );
};
