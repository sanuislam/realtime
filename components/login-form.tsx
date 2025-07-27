"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signInEmailAction } from "@/actions/sign-in-email-action";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setIsLoading(true);
    const formData = new FormData(evt.target as HTMLFormElement);

    const { error } = await signInEmailAction(formData);

    if (error) {
      toast.error(error);
      setIsLoading(false);
    } else {
      toast.success("Login success. Welcome back!");
      router.push("/profile");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm w-full space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? <Loader2 className="text-white animate-spin" /> : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
