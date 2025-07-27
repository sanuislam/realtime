import ReturnButton from "@/components/return-button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const AdminDashbaord = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/auth/login");

  if (session.user.role !== "ADMIN") {
    return (
      <div className="px-8 py-16 container mx-auto max-w-screen-lg space-y-8">
        <div className="space-y-8">
          <ReturnButton href="/profile" label="Profile" />

          <h1 className="text-3xl font-bold text-rose-600">
            Forbidden, Access denied!
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className="px-8 py-16 container mx-auto max-w-screen-lg space-y-8">
      <div className="space-y-8">
        <ReturnButton href="/profile" label="Profile" />

        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </div>
    </div>
  );
};

export default AdminDashbaord;
