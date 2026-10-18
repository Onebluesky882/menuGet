import { betterAuth } from "better-auth";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
const databaseUrl = process.env.DATABASE_URL;
import * as schema from "./src/db/schema";
if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is required");
}

const client = postgres(databaseUrl);

const db = drizzle(client, { schema });
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
});
