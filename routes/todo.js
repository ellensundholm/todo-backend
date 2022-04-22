
const express = require('express')
const router = express.Router()
const todoDB = require("../todos.json")
const { v4: uuidv4 } = require('uuid');


router.get('/', async (req, res) => {
    return res.status(200).send(todoDB.todos)
})

router.put('/', async (req, res) => {
    const { id, title } = req.body;
    if (!id) {
        return res.status(400).send("No id provided.")
    }
    if (!title) {
        return res.status(400).send("No title provided.")
    }
    var validId = false;
    const updatedList = todoDB.todos.map((todo) => {
        if (todo.id === id) {
            todo.title = title
            validId = true;
        }
        return todo
    })
    if (!validId) {
        return res.status(400).send("A todo with that id does not exist in the DB.")
    }
    todoDB.todos = updatedList
    return res.status(200).send({ id, title })
})

router.post('/', async (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).send("No title provided.")
    }
    const id = uuidv4();
    const newTodo = {
        title,
        id
    }
    todoDB.todos.push(newTodo)
    return res.status(200).send(newTodo)
})

router.delete('/:id', async (req, res) => {

    const { id } = req.params;
    const updatedList = todoDB.todos.filter((todo) => todo.id !== id)
    if (updatedList.length === todoDB.todos.length) {
        return res.status(400).send("A todo with that id does not exist in the DB.")
    }
    todoDB.todos = updatedList
    return res.status(200).send({ id })
})

module.exports = router