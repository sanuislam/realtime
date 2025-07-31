"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { User2 } from "lucide-react";

const NavBar = () => {
  const { data: session, isPending } = useSession();
  
  const href = session ? "/profile" : "/auth/login";

  return (
    <div className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button className="rounded-full" asChild>
            {isPending ? (
              ""
            ) : (
              <Link href={href}>{session ? <User2 /> : "Login"}</Link>
            )}
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
