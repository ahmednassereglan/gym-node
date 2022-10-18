const mongoose = require('mongoose');

const connection_url = "mongodb://ali:12345@ac-duhubsi-shard-00-00.ol0ohiy.mongodb.net:27017,ac-duhubsi-shard-00-01.ol0ohiy.mongodb.net:27017,ac-duhubsi-shard-00-02.ol0ohiy.mongodb.net:27017/gym?ssl=true&replicaSet=atlas-p3op7d-shard-0&authSource=admin&retryWrites=true&w=majority";

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