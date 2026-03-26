import React from "react";
import { useRole } from "@/contexts/role-context";
import { ROLES } from "@/types/role.types";
import type { Role } from "@/types/role.types";

export const RoleSelector: React.FC = () => {
  const { currentRole, setRole } = useRole();
  const roles: Role[] = [
    "ai-software-engineer",
    "ml-engineer",
    "fullstack-engineer",
    "phd-student",
  ];

  return (
    <div className="w-full py-6 px-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
          👤 View My Portfolio As:
        </p>
        <div className="flex justify-center gap-2 flex-wrap">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setRole(role)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                currentRole === role
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md scale-105 ring-2 ring-blue-300 dark:ring-blue-500"
                  : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600"
              }`}
              title={`Switch to ${ROLES[role].title}`}
            >
              <span className="mr-1.5">{ROLES[role].icon}</span>
              {ROLES[role].title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
