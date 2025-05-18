// src/data/context.tsx
import React, { createContext, useContext, useState } from "react";

type SidebarContextType = {
  miniSideBar: boolean;
  setMiniSideBar: (val: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [miniSideBar, setMiniSideBar] = useState(false);

  return (
    <SidebarContext.Provider value={{ miniSideBar, setMiniSideBar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar harus digunakan dalam SidebarProvider");
  }
  return context;
};
