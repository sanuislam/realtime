"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { APIError } from "better-auth/api";

export async function signInEmailAction(data: {
  email: string;
  password: string;
}) {
  if (!data.email) {
    return { error: "Please enter your email" };
  }

  if (!data.password) {
    return { error: "Please enter password" };
  }

  try {
    await auth.api.signInEmail({
      headers: await headers(),
      body: {
        email: data.email,
        password: data.password,
      },
    });

    return { error: null };
  } catch (err) {
    if (err instanceof APIError) {
      return { error: err.message };
    }
    return { error: "Internal Server Error!" };
  }
}
