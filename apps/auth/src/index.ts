import { Hono } from "hono";
import { auth } from "../auth.config";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// Better Auth API

app.on(["GET", "POST"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

export default app;
