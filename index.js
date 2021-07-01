const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const cookieParser=require('cookie-parser');
const port=8000;
const app=express();
const path=require('path');


const db=require('./config/mongoose');


const session=require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport_local_strat');
const MongoStore=require('connect-mongodb-session')(session);

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static("assets"));



app.use(expressLayouts);
app.set("layout extractStyles",true);
app.set("layout extractScripts",true);



app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));



//mongo store is used to store the session cookie in the db
app.use(session({
    name: 'referral',
    secret: 'hermoinegranger',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store:new MongoStore(
        {
            mongooseConnection:db,
            autoRemove:"disabled"
        },
        function(err)
        {
            console.log(err || "connect-mongodb ok");
        }
    )
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


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