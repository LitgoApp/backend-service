# LitGo Backend Service
This repository is the backend service for Litgo. It is built using Node.js, Express, TypeScript, and Prisma.

To start developing in this repository, ensure you have [git installed](https://git-scm.com/downloads) and then run `git clone https://github.com/LitgoApp/backend-service.git`, followed by `cd ./backend-service`. You should now be inside the repository to start developing!

# Prerequisites
To run the server locally, you need to install [Node.js](https://nodejs.org/en/download) and [Docker](https://docs.docker.com/get-docker/) on your computer (note that they require a computer restart once installed).

Once you have these installed, create a file called `.env` in the root of the repository, and paste the following inside of it:

    PORT=3001
    DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres

Finally, run the following commands from anywhere in the repository:

    npm install
    npm run db-build
    npm run db-up
    npx prisma migrate dev

This will install all of the node packages you need, as well as create a local PostgreSQL database for your own development!
    
# Running The Server

To get the server up and running, run `npm run dev`. This will start a nodemon server that will automatically restart any time you save changes to your code. To test it, go to `http://localhost:3001`.

# Database

The database can be stopped at any time with `npm run db-down`, and started with `npm run db-up`. To completely remove the local database, run `npm run db-remove`, and run `npm run db-build` to create it again.

Since we are using prisma to interact with the database, all of the schema (tables, columns, datatypes, etc) must be used through prisma, with the `prisma/schema.prisma` file. This is how we define what goes in our database! [Here](https://www.prisma.io/docs/concepts/components/prisma-schema) is a link to the schema reference if needed.

Once you make any desired changes to the schema file, you must run `npx prisma generate` to apply the changes to the database. Once you are happy with your changes, run `npx prisma migrate dev --name <name_of_migration>`, for instance `npx prisma migrate dev --name added_user_email_field`. This will create a migration file that allows the production database to copy your changes (Note that if your migration warns you of needing to delete all of the contents of your database, ensure that this is because of previous temporary migrations you've made and won't happen in production).

Once your database is up-to-date, you can use [prisma](https://www.prisma.io/docs/concepts/components/prisma-client) right inside of an endpoint to get typesafe querying with the database!

If you're interested in looking at the current contents of your database, simply run `npx prisma studio` to open a web app where you can interact with all the tables and rows!

# Branches
Both the `main` and `prod` branches are protected from direct pushes, instead, make your own branch from an up-to-date version of `main`, and then submit a pull request from your feature branch to main.
