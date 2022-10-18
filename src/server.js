const express = require("express");
const dotenv = require("dotenv");
const port = process.env.PORT || 8000;
const routeee = require("./routes/route");
// App Config
const app = express();
dotenv.config();

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/route", routeee);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
