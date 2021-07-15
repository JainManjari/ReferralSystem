const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const Employee = require('../models/employees');
// const Referee = require('../models/referees');


// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback:true
    },
    function(req,email, password, done){
        // find a user and establish the identity
        referralCode=req.body.referralCode.toUpperCase();
       // console.log("ref "+referralCode);
        Employee.findOne({email: email}, function(err, user)  {
            if (err){
                req.flash("error",err);
                return done(err);
            }
            if (!user || user.password != password || (!user.isEmployee && user.referralCode!=referralCode) || (user.isEmployee && referralCode!="")){
               // console.log('Invalid Username/Password');
                req.flash("error","Invalid details!!");
                return done(null, false);
                
            }

            return done(null, user);
        });
    }


));


// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id);
});



// deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    Employee.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }

        return done(null, user);
    });
});

//check if the user is authenticate
passport.checkAuthentication=function(req,res,next)
{
    //if the user is signed then pass on the request to the next function which is controller function
    if(req.isAuthenticated())
    {
        return next();
    }
    //if the user is not signed in
    return res.redirect("/");
}

passport.setAuthenticatedUser=function(req,res,next)
{
    if(req.isAuthenticated())
    {
        //req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        res.locals.user=req.user
    }
    next();

}
module.exports = passport;