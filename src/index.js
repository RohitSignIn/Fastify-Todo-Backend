import Fastify from "fastify";
import fastifyPrisma from "@joggr/fastify-prisma";
import autoLoad from "@fastify/autoload";
import fastifyEnv from "@fastify/env";

import { fileURLToPath } from "url";
import { dirname, join } from "path";

import mainRoutes from "./routes/main.route.js";

const app = Fastify();

// Setting up .env variables
const schema = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: {
      type: "string",
      default: 3000,
    },
  },
};

const options = {
  confKey: "config", // optional, default: 'config'
  schema: schema,
  dotenv: true,
};

app.register(fastifyEnv, options);

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
  app.listen({ port: app.config.PORT }, () => {
    console.log("listening on port");
  });
});
