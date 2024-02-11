// Import the framework and instantiate it
import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import fastifyPrisma from "@joggr/fastify-prisma";

import mainRoutes from "./routes/main.route.js";

const app = Fastify();

// Declare a route1
app.register(mainRoutes, { prefix: "/api" });

// (async () => {
//   // Declare a route1
//   app.register(mainRoutes, { prefix: "/api" });

//   await app.register(fastifyPrisma, {
//     client: new PrismaClient(),
//   });
// })();

// Run the server!
app.listen({ port: 8000 }, () => {
  console.log("listening on port");
});

// NOTE: Fastify default support text/plain and application/json
