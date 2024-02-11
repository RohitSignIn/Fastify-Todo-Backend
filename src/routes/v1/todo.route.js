const todoRoute = (fastify, options, done) => {
  fastify.get("/", () => {
    return { user: "ping success" };
  });

  fastify.get("/:id", (req, reply) => {
    console.log(req.id);
    return { user: "ping success" };
  });

  fastify.post("/", () => {
    return { user: "ping success" };
  });

  fastify.put("/", () => {
    return { user: "ping success" };
  });

  fastify.delete("/:id", () => {
    return { user: "ping success" };
  });

  done();
};

module.exports = todoRoute;
