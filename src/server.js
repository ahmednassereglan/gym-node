// Importing
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8000;

// App Config
const app = express();
dotenv.config({ path: 'src/config/config.env' })

// DB Config
const connectDatabase = require('./config/db')


// Routes
const clientRoute = require("./routes/clientRoute");
const employeeRoute = require("./routes/employeeRoute");
const machineRoute = require("./routes/machineRoute")
const adminRoute = require("./routes/adminRoute")






// App Use
app.use(express.json());
// app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(session({
  secret: process.env.SESSION_SECRET || 'SecretStringForSessions',
  saveUninitialized: true,
  resave: true
}));
app.use(cookieParser())

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization, X-Requested-With, Accept, Origin');
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
  });
app.options('*', cors());
app.use(cors());  


// Database Connection
connectDatabase()



// Using Routes
app.use("/api", clientRoute);
app.use("/api", employeeRoute);
app.use("/api", machineRoute)
app.use("/api", adminRoute)



app.listen(port, () => console.log(`Server started on Port: ${port}! ... and Host http://localhost:${port}`));
