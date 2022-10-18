const express = require('express')
const dotenv = require('dotenv')
const port = process.env.PORT|| 8000;

// App Config
const app = express()
dotenv.config()


app.get("/", (req, res) => res.send("Hello World!"));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

