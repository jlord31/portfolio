import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Role } from "@/types/role.types";
import { ROLES } from "@/types/role.types";

interface RoleContextType {
  currentRole: Role;
  setRole: (role: Role) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

const isValidRole = (role: unknown): role is Role => {
  return typeof role === "string" && role in ROLES;
};

const getRoleFromUrl = (): Role => {
  const params = new URLSearchParams(window.location.search);
  const roleParam = params.get("role");
  
  if (roleParam && isValidRole(roleParam)) {
    return roleParam;
  }
  
  return "ai-software-engineer"; // default to AI Software Engineer
};

export const RoleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentRole, setRoleState] = useState<Role>("ai-software-engineer");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize from URL on first mount
    const roleFromUrl = getRoleFromUrl();
    setRoleState(roleFromUrl);
    setIsInitialized(true);
  }, []);

  const setRole = (role: Role) => {
    setRoleState(role);
    // Update URL without page reload
    const params = new URLSearchParams(window.location.search);
    params.set("role", role);
    window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
  };

  if (!isInitialized) {
    return null; // Prevent rendering until URL is read
  }

  return (
    <RoleContext.Provider value={{ currentRole: currentRole, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = (): RoleContextType => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within RoleProvider");
  }
  return context;
};
