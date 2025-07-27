import ReturnButton from "@/components/return-button";
import SignOutButton from "@/components/sign-out-button";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/auth/login");

  return (
    <div className="px-8 py-16 container mx-auto max-w-screen-lg space-y-8">
      <div className="space-y-8">
        <ReturnButton href="/" label="Home" />
        <h1 className="text-3xl font-bold">Profile</h1>
      </div>

      <div className="flex items-center gap-4">
        {session.user.role === "ADMIN" ? (
          <Button size={"sm"} asChild>
            <Link href={"/admin/dashboard"}>Admin Dashboard</Link>
          </Button>
        ) : session.user.role === "AGENT" ? (
          <Button size={"sm"} asChild>
            <Link href={"/agent/dashboard"}>Agent Dashboard</Link>
          </Button>
        ) : (
          "You are just user"
        )}
        <SignOutButton />
      </div>
      <pre className="text-sm overflow-clip">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
};

export default ProfilePage;
