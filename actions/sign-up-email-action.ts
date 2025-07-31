"use server";

import { auth, ErrorCode } from "@/lib/auth";
import { APIError } from "better-auth/api";

export async function signUpEmailAction(data: {
  name: string;
  email: string;
  password: string;
}) {
  if (!data.name) {
    return { error: "Please enter your name" };
  }

  if (!data.email) {
    return { error: "Please enter your email" };
  }

  if (!data.password) {
    return { error: "Please enter password" };
  }

  try {
    await auth.api.signUpEmail({
      body: {
        name:data.name,
        email:data.email,
        password:data.password,
      },
    });
    return { error: null };
  } catch (err) {
    if (err instanceof APIError) {
      const errCode = err.body ? (err.body.code as ErrorCode) : "UNKNOWN";

      switch (errCode) {
        case "PASSWORD_TOO_SHORT":
          return { error: "Password minimum 6 character's required" };
        default:
          return { error: err.message };
      }
    }
    return { error: "Internal Server Error!" };
  }
}
