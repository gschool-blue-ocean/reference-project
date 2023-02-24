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

**Root**

- `npm run dev` - Runs the API server and hosts your frontend assets.
- `npm run dev:server` - Runs the API server in watch mode.
- `npm run dev:client` - Hosts your frontend assets.

**/client**

- `npm run dev` - Hosts your assets.
- `npm run build` - Builds your assets (mainly used in CI/CD).

**/server**

- `npm run dev` - Runs the server in watch mode.
- `npm run start` - Starts the server (mainly used when deploying).

## Useful Commands

Run command in the context of a container `docker exec ls`

Get IP address of a container running in docker: `docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id`

## TODO

1. Update README.
1. Try to deploy.
1. Add react-router, some styles, and components.
1. Add backend and frontend testing + CI.
1. Rename client/backend to server and app.
1. Add seed file.
