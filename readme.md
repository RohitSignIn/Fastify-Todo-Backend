# Fastify Todo Backend

## Overview

This project serves as the backend for a Todo application, utilizing the Fastify framework, MySQL database, and Prisma as the ORM. Following the MVC pattern, the codebase is organized for clarity and scalability.

## Project Structure

- `src/`
  - `controllers/`: Fastify route handlers.
  - `services/`: Business logic services.
  - `repository/`: Database interaction logic.
  - `routes/`: Fastify route definitions.
  - `index.js`: Entry point for the application.

## Dependencies

- **Fastify:** A web framework designed for speed.
- **MySQL:** A relational database for storing data.
- **Prisma:** An ORM for database interactions.
- **Fastify-bcrypt, fastify-jwt:** Authentication and authorization plugins.
- **Fastify-environment:** Simplifies management of environment variables.

## Fastify Features Utilized

### Auto Register and Decorators

Fastify's auto-register feature is employed to effortlessly make the Fastify instance accessible throughout services and repositories using decorators.

### JWT (JSON Web Token) Authentication

JWT-based authentication is implemented, ensuring secure and stateless user sessions. Tokens are Http Only and stored in cookies.

### Fastify Plugins

Several Fastify plugins such as `fastify-bcrypt` and `fastify-jwt` are employed for efficient user authentication and authorization.

## API Endpoints

### User Management

#### 1. Get Login User Details

- **Endpoint:** `GET /api/v1/user/`
- **Description:** Retrieves details of the logged-in user.
- **Authentication:** JWT Token (Http Only Cookie)

#### 2. Create User (Signup)

- **Endpoint:** `POST /api/v1/user/`
- **Description:** Registers a new user.
- **Authentication:** None
- **Payload:**
  ```json
  {
    "name": "Bhagwan Singh",
    "email": "bhagwan.signin@gmail.com",
    "password": "don@tGuess"
  }
  ```

#### 2. Update User Details

- **Endpoint:** `PUT /api/v1/user/`
- **Description:** Modifies details of the logged-in user.
- **Authentication:** JWT Token (Http Only Cookie)
- **Payload:**
  ```json
  {
    "update": "name",
    "to": "Rohit"
  }
  ```

#### 2. Delete User

- **Endpoint:** `DELETE /api/v1/user/`
- **Description:** Deletes the account of the logged-in user.
- **Authentication:** JWT Token (Http Only Cookie)
- **Payload:**
  ```json
  {
    "update": "name",
    "to": "Rohit"
  }
  ```

## Database Schema

### User

```prisma
 model User {
  id Int @id @default(autoincrement())
  name String
  email String @unique
  password String
  todos Todo[]
}
```

### Todo

```prisma
enum Status {
  PENDING
  COMPLETED
}
```

```prisma
model Todo {
  id Int @id @default(autoincrement())
  task String
  status Status
  userId Int?
  user User? @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

### Enjoy the Project!

I've put my heart into crafting this project, and I genuinely hope you find it enjoyable and valuable. Feel free to explore, experiment, and, if you have any thoughts or suggestions, I'm all ears. Happy coding, and I hope this project adds a touch of joy to your development journey! 🚀
