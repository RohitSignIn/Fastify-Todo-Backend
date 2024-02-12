import Fastify from "fastify";
import fastifyPrisma from "@joggr/fastify-prisma";
import autoLoad from "@fastify/autoload";

import { fileURLToPath } from "url";
import { dirname, join } from "path";

import mainRoutes from "./routes/main.route.js";

const app = Fastify();

// configure autoLoad register plugin
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.register(autoLoad, {
  dir: join(__dirname, "plugins"),
});

// Register Routes
app.register(mainRoutes, { prefix: "/api" });

// Register Prisma - PrismaClient
(async () => {
  await app.register(fastifyPrisma);
})();

// Server Start
app.ready(() => {
  app.listen({ port: 8000 }, () => {
    console.log("listening on port");
  });
});
