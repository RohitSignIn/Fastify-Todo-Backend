// USER REQ PAYLOAD SCHEMA
export const userCreateSchema = {
  type: "object",
  properties: {
    // Define properties expected in the request payload
    name: { type: "string" },
    email: { type: "string" },
    password: { type: "string" },
  },
  required: ["name", "email", "password"], // required fields
};

export const userUpdateSchema = {
  type: "object",
  properties: {
    update: { type: "string" },
    to: { type: "string" },
  },
  required: ["update", "to"],
};

export const userSigninSchema = {
  type: "object",
  properties: {
    email: { type: "string" },
    password: { type: "string" },
  },
  required: ["email", "password"],
};

// TODO REQ PAYLOAD SCHEMA
export const todoCreateSchema = {
  type: "object",
  properties: {
    task: { type: "string" },
  },
  required: ["task"],
};

export const todoUpdateSchema = {
  type: "object",
  properties: {
    update: { type: "string" },
    to: { type: "string" },
    id: { type: "integer" },
  },
  required: ["update", "to", "id"], // id -> todoId
};
