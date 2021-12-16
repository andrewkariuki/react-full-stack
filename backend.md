The purpose of this task is to investigate your ability to create a simple backend application using nodejs

## Task

Create a set of rest apis for a todo list. The following endpoints are required:

    * GET /todos
    * GET /todos/:id
    * POST /todos
    * PUT /todos/:id
    * DELETE /todos/:id

## Additional requirements

`GET /todos` should return all todos.
`GET /todos?sort=asc|desc` should return all todos sorted by id in ascending or descending order.
`GET /todos?limit=10` should return the first 10 todos.
`GET /todos?limit=10&skip=10` should skip the first ten and return the next 10 todos.

## Restrictions

1. The todo list should be stored in a `PostgreSQL` database.
2. The application should be developed with `NodeJS`
3. A proper git history should be maintained.
