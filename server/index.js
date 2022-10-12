const express = require('express');
const cors = require('cors')
const data = require(`../data/db.json`)

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data)
});

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`)
})