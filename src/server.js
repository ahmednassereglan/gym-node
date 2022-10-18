const express = require('express')
const dotenv = require('dotenv')


// App Config
const app = express()
dotenv.config()


app.get("/", (req, res) => res.send("Hello World!"));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

