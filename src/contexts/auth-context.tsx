"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthData, AuthProviderProps } from "../types/login";
import { Login } from "../models/login.model";


const AuthContext = createContext<AuthData>({
  userDetails: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthenticationProvider = ({ children }: AuthProviderProps): React.JSX.Element => {

  const [userDetails, setUserDetails] = useState<Login | null>(() => {
    if (typeof globalThis !== "undefined") {
      const userData = globalThis.localStorage.getItem("userDetails");
      return userData ? JSON.parse(userData) : null;
    }
    return null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof globalThis !== "undefined") {
      return !!globalThis.localStorage.getItem("userDetails");
    }
    return false;
  });


  useEffect(() => {
    if (userDetails) {
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
     
    } else {
      localStorage.removeItem("userDetails");
    }
  }, [userDetails]);


  const login = (data: Login | null) => {
    setUserDetails(data);
    setIsAuthenticated(!!data);
  }

  const logout = () => {
    setUserDetails(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ userDetails, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }

  return context;
};
