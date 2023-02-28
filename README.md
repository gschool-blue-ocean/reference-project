# Full-Stack React Example

This repo contains an example of a full-stack application with an express backend and a React frontend.

It uses vite as the module bundler and dotenv for configuration. It's organized as a mono-repo using [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) which allows us to have our client and server in one repo.

> **Note**: When you run `npm install` at the root, it will install all dependencies listed in `package.json`, `server/package.json`, and `client/package.json`.

## Customizing the Template

1. Create new repo using this one as a template.
1. Pull that repo down.
1. Update `./server/migration.sql` to the schema for your application.

## Development Setup

1. Install dependencies: `npm install`
1. Create your database: `createdb YOUR_DB`
1. Run your migrations: `psql -f server/migration.sql YOUR_DB`
1. Create your `.env` file: `cp .env.template .env`
1. Add your info in `.env`
1. Run the app: `npm run dev`

## Scripts

**`root`**

- `npm run dev` - Runs the entire development stack with docker-compose.
  - `npm run dev:api` - Runs the API server in watch mode.
  - `npm run dev:client` - Hosts your frontend assets.
- `npm run lint` - Checks code for style issues.
- `npm run lint:fix` - Fixes style issues in the codebase.
- `npm run test` - Runs all tests

"dev": "docker-compose up",
"dev:api": "npm run dev --workspace=api",
"dev:client": "npm run dev --workspace=client",
"lint": "prettier --check .",
"lint:fix": "prettier --write .",
"test": "npm run test:client",
"test:client": "npm run test --workspace=client"

**`/client`**

- `npm run dev` - Hosts your assets.
- `npm run build` - Builds your assets (mainly used in CI/CD).

**`/server`**

- `npm run dev` - Runs the server in watch mode.
- `npm run start` - Starts the server (mainly used when deploying).

## Useful Commands

Run command in the context of a container: `docker exec <container_name> ls`
Get IP address of a container running in docker: `docker inspect <container_name>`

## TODO

1. Update README.
1. Try to deploy.
1. Add react-router, some styles, and components.
1. Run frontend/backend tests in CI.
1. Add seed file.
