import { createContext, ReactNode, useState } from "react";

type ContextType = {
  sidebarState: boolean;
  setSidebarState: (state: boolean) => void;
};
type SidebarProviderProps = {
  children: ReactNode;
};

const initialData: boolean = false;

export const SidebarContext = createContext<ContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [sidebarState, setSidebarState] = useState(initialData);
  return (
    <SidebarContext.Provider value={{ sidebarState, setSidebarState }}>
      {children}
    </SidebarContext.Provider>
  );
};
