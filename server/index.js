const fs = require('fs');
const express = require('express');
const cors = require('cors');
const data = require(`../data/db.json`);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({credentials: true, origin: true}));
app.use(express.json());

app.get("/api", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data)
});

app.post("/api", (req,res, next) => {
    console.log('Got response: ', res.statusCode);
    console.log(req.body);
    data.push(req.body);

    // add the post data to the json file
    try {
        const path = './data/db.json'
        const listing = JSON.parse(fs.readFileSync(path, 'utf-8'));
        listing.push(req.body);
        fs.writeFileSync(path, JSON.stringify(listing));
    } catch(err) {
        // JSON.parse or fs.writeFileSync might fail:
        next(err);
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`)
})