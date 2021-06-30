const express=require('express');
const port=8000;
const app=express();




app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in connecting with the server ",err);
        return;
    }
    console.log("Server successfully running on port "+8000);
})