const express=require('express');
const port=8000;
const app=express();
const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));
app.use(express.urlencoded());
app.use(express.static("assets"));

app.use("/",require("./routes"));

app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in connecting with the server ",err);
        return;
    }
    console.log("Server successfully running on port "+8000);
})