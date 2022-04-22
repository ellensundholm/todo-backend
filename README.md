# Todo - backend

## Description

This is a backend for a todo-list application created for the purpose of testing and evaluating frontend frameworks.
This backend can be used together with the evaluation model provided by Sundholm and Retzius. 

## Run locally
To run the application locally clone this repository and run the following commands:

    npm install
    node app.js

This API uses a local JSON object as the database that will be reset when restarting the server.

## API

The base url for this server is: `http://localhost:8000`

### Get todos

`GET /todo`

Gets all the todos saved by the server

**Success response:**

Condition: Todo list is fetched from the server

Code: `200`

Response body:

    [
        {
            "title": "New todo"
            "id": "1"
        },
        {
            "title": "Second todo"
            "id": "2"
        }
    ]

### Add todo

`POST /todo`

Request body shall include the title for the new todo

    {
        "title": "New todo"
    }

Adds a new todo list item

**Success response:**

Condition: Todo is created

Code: `200`

Response body:

    {
        "title": "New todo"
        "id": "1"
    }


**Error response:**

Condition: Title is not sent in request

Code: `400`

Message: `No title provided.`

### Update todo

`PUT /todo`

Request body shall include the new title for the todo and the id of the todo to be updated

    {
        "title": "New todo title"
        "id": "1"
    }

Updates a todo in the todo list

**Success response:**

Condition: The title of todo with id is updated

Code: `200`

Response body:

    {
        "title": "New todo title"
        "id": "1"
    }


**Error response:**

Condition: Title is not sent in request

Code: `400`

Message: `No title provided.`

___

Condition: Id is not sent in request

Code: `400`

Message: `No id provided.`

___
Condition: Id does not exist

Code: `400`

Message: `A todo with that id does not exist in the DB`

### Delete todo

`DELETE /todo/:id`

Delete a todo with the provided id

**Success response:**

Condition: Todo with id is deleted

Code: `200`

Response body:

    {
        "id": "1"
    }

**Error response:**

Condition: Id does not exist

Code: `400`

Message: `A todo with that id does not exist in the DB`