const mongoose = require('mongoose');

const connection_url = process.env.DBCONNECT;

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
const connectDatabase = () => {
     mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
}).then(con => {
    console.log(`MongoDB Connection Succeeded With HOST: ${con.connection.host} , PORT: ${con.connection.port} .`)
})
.catch((error) => console.error("MongoDB connection failed:", error.message));
}

module.exports = connectDatabase