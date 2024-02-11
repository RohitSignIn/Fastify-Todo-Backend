import Fastify from "fastify";
import fastifyMysql from "@fastify/mysql";
// import fastifyPrisma from "@joggr/fastify-prisma";

import mainRoutes from "./routes/main.route.js";

const app = Fastify();

(async () => {
  // Route Setup
  app.register(mainRoutes, { prefix: "/api" });

  app.register(fastifyMysql, {
    connectionString: "mysql://root:root@localhost:7777/tododb",
  });

  // Register Prisma Client
  // await app.register(fastifyPrisma);

  // Run the server!
  app.listen({ port: 8000 }, () => {
    console.log("listening on port");
  });
})();

// NOTE: Root Plugin is Already Booted showing while using app.ready -- Search it

// NOTE: Fastify default support text/plain and application/json
