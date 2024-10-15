const passport=require('passport')

module.exports=app=>{



    app.get('/auth/google',passport.authenticate('google',{
        scope:['profile','email'] //Asking for access to profile and email // google is internal identifier of the Google Strategy 
    }))


    app.get('/auth/google/callback',
    passport.authenticate('google'),
    (req,res)=>{
        res.redirect('/surveys')

        }
    )


    app.get('/api/logout',(req,res)=>{
        req.logout();
        res.redirect('/')

    })

    app.get('/api/current_user',(req,res)=>{
        res.send(req.user);})


}