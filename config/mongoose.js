const mongoose = require("mongoose");

const URL = `mongodb+srv://Cluster95362:WFNST3JmaVFd@cluster95362.ypsnut5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster95362`;

mongoose.connect(URL,{ 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true 
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error connecting to db"));
db.once("open", function () {
  console.log("Successfully connected to mongodb");
});
module.exports = db;