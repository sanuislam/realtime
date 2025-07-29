"use client";

import { UserRole } from "@prisma/client";
import { useState } from "react";

interface UserRoleSelectProps {
  userId: string;
  role: UserRole;
}

const UserRoleSelect = ({ userId, role }: UserRoleSelectProps) => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleChange() {}

  return (
    <select
      value={role}
      onChange={handleChange}
      disabled={role === "ADMIN" || isLoading}
      className="px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
    >
      <option value="ADMIN">ADMIN</option>
      <option value="AGENT">AGENT</option>
      <option value="USER">USER</option>
    </select>
  );
};

export default UserRoleSelect;
