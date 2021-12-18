# React fullstack

This application contains a simple ExpressJs Server and ReactJs Frontend. Managed using Lerna and Yarn workspaces.

## Usage

To run this application, one aught to have Node and installed.

First clone the repo using git

```shell
git clone
```

Then install the required npm packages

```shell
cd && yarn install
```

The backend is powered using TypeORM and PostgreSQL DBMS. So, to ensure everything is working correctly, there is need to create a database and configure the **ormconfig.yml** files.

```yml
    port: 5432 # Change to your database name, port, password and username
    username: "postgres"
    password: "1234"
    database: "todos"
```

__Note: Do this specifically on the default and development connection options__

After the ORM configuration, you will have to run the migrations for the database. First, cd into the backend package root.

```shell
cd packages/backend
```

The run migrations with the development connection as your an argument.

```shell
yarn typeorm migration:run -c development
```

Running the Backend API. With in the root directory run the command below and the server will start up on the url **http://localhost:4000/**

```shell
yarn run dev:backend
```

This backend contains a minimalist Todo Application. However, the application has a security feature were one has to login and register before they can query or post any todos. Meaning, it exposes the following end points.

```shell
POST http://localhost:4000/login
POST http://localhost:4000/register
GET http://localhost:4000/todos
POST http://localhost:4000/todos
GET http://localhost:4000/todos/:id
PUT http://localhost:4000/todos/:id
DELETE http://localhost:4000/todos/:id
```

The API end point **POST http://localhost:4000/register** requires your to enter your name, email and password. After which, you can got ahead and login via **POST http://localhost:4000/login** the login response provides an auth token **auth** signed using jwt. You then have to pass it to your request headers with the keys **auth** and value is the token response.

The url **GET http://localhost:4000/todos** gives room for conditional queries with sort, limit and skip being the key option.

The todo model will require you to enter a **title** and a **description**.