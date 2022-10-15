const fs = require('fs');
const express = require('express');
const cors = require('cors');
const data = require(`../data/db.json`);
const multer = require('multer');
const path = require('path');
const e = require('cors');

// initializing express app
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "client/public/images")
    },
    filename: (req, file, cb) => {
        console.log('Filename: ', file)
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})

app.use(cors({credentials: true, origin: true}));
app.use(express.json());

//routing
app.get("/api", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data)
});

app.post("/api", (req,res, next) => {
    console.log('Got response: ', res.statusCode);
    console.log(req.body);
    // data.push(req.body);

    // add the post data to the json file
    try {
        const path = './data/db.json'
        const listing = JSON.parse(fs.readFileSync(path, 'utf-8'));
        listing.push(req.body);
        console.log('Listing: ', listing)
        fs.writeFileSync(path, JSON.stringify(listing));
    } catch(err) {
        // JSON.parse or fs.writeFileSync might fail:
        next(err);
    }
});

app.get("/upload", (req, res) => {
    res.upload('Upload')
} )

app.post("/upload", upload.single('img', (req, res, next) => {
    console.log('Image upload - ', req.file, req.body)
}));

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`)
})