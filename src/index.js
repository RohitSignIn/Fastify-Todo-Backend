import Fastify from "fastify";
import fastifyPrisma from "@joggr/fastify-prisma";
import autoLoad from "@fastify/autoload";

import { fileURLToPath } from "url";
import { dirname, join } from "path";

import mainRoutes from "./routes/main.route.js";

const app = Fastify();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.register(autoLoad, {
  dir: join(__dirname, "plugins"),
});

app.register(mainRoutes, { prefix: "/api" });

// Register Prisma - PrismaClient
(async () => {
  await app.register(fastifyPrisma);
})();

app.ready(() => {
  app.listen({ port: 8000 }, () => {
    console.log("listening on port");
  });
});

// NOTE: Root Plugin is Already Booted showing while using app.ready -- Search it
// NOTE: Fastify default support text/plain and application/json
// Run the server!
