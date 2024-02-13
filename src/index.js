import Fastify from "fastify";
import fastifyPrisma from "@joggr/fastify-prisma";
import autoLoad from "@fastify/autoload";
import fastifyEnv from "@fastify/env";
import fastifyBcrypt from "fastify-bcrypt";

import { fileURLToPath } from "url";
import { dirname, join } from "path";

import mainRoutes from "./routes/main.route.js";

const app = Fastify();

// Setting up .env variables
const schema = {
  type: "object",
  required: ["PORT", "SALT_ROUND"],
  properties: {
    PORT: {
      type: "string",
      default: 3000,
    },
    SALT_ROUND: {
      type: "integer",
      default: 10,
    },
  },
};

const options = {
  confKey: "env",
  schema,
  dotenv: true,
  data: process.env,
};

// Register fastify env plugin
app.register(fastifyEnv, options);

// Register Prisma - PrismaClient

app.after(() => {
  // Register fastifyBcrypt plugin
  app.register(fastifyBcrypt, {
    saltWorkFactor: app.env.SALT_ROUND,
  });
  // Register Routes
  app.register(mainRoutes, { prefix: "/api" });

  // configure autoLoad register plugin
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // -- Register AutoLoad with dir that has all custom plugins --
  app.register(autoLoad, {
    dir: join(__dirname, "plugins"),
  });

  (async () => {
    await app.register(fastifyPrisma);
  })();
});

// Server Start
app.ready(() => {
  app.listen({ port: app.env.PORT }, () => {
    console.log("listening on port", app.env.PORT);
  });
});
