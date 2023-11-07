import React from "react";

import { AuthProvider } from "./auth";

interface IAppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
