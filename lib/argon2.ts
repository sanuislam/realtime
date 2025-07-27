import { hash, verify, type Options } from "@node-rs/argon2";

const opts: Options = {
  memoryCost: 2 ** 16, // 64 MB
  timeCost: 3,
  outputLen: 32,
  parallelism: 2,
};

export async function hashPassword(password: string) {
  const result = await hash(password, opts);
  return result;
}

export async function verifyPassword(data: { password: string; hash: string }) {
  const { password, hash } = data;

  const result = await verify(hash, password, opts);
  return result;
}
