const express = require('express');
const cors = require('cors')
const todo = require('./routes/todo')

const app = express()
const PORT = 8000;

app.use(express.json())
app.use(cors())

app.use('/todo', todo)

app.listen(PORT, () => console.log(`app is listening to port ${PORT}`))