import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth.handler);

//Todo: this route.ts file lives in /api/auth/[...all]

//Todo: for works in 
// /api/auth/sign-in
// /api/auth/sign-up
// /api/auth/get-session
