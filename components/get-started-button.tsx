"use client";

import React from "react";
import Link from "next/link";

import { useSession } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";

const GetStartedButton = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <Button size={"lg"} className="opacity-50">
        Get Started
      </Button>
    );
  }

  const href = session ? "/profile" : "/auth/login";

  return (
    <div className="flex flex-col items-center gap-4">
      <Button size={"lg"} asChild>
        <Link href={href}>Get Started</Link>
      </Button>

      {session && (
        <p className="flex items-center gap-2">
          <span
            data-role={session.user.role}
            className="size-4 rounded-full animate-pulse data-[role=USER]:bg-sky-600 data-[role=ADMIN]:bg-red-600 data-[role=AGENT]:bg-purple-600"
          />
          Welcome back, <b>{session.user.name}!</b> 👋
        </p>
      )}
    </div>
  );
};

export default GetStartedButton;
