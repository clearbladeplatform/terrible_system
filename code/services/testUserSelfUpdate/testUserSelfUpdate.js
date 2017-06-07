function testUserSelfUpdate(req, resp){
    ClearBlade.init({request:req});
    log("surpassed init");
    ClearBlade.registerUser("foo@bar.baz","password",function(err,data){
        if(err){
            log("failed in register user");
            resp.error("error"+ JSON.stringify(data));
        }else{
            //let's modify ourselves!
            log("didn't fail in register user");
            ClearBlade.loginUser("foo@bar.baz","password",function(err,data){
                if(err){
                    log("failed in ogin user");
                    resp.error("error2"+ JSON.stringify(data));
                }else{
                    log("didn't fail in login user");
                    var user = ClearBlade.User();
                    user.setUser({"testcolumn":"set"},function(err,data){
                        if(err){
                            log("failed in setuser callback");
                            resp.error('error3'+JSON.stringify(data));
                        }else{
                            log("ayy lmao");
                            resp.success("we did it I guess");
                        }
                    });
                }
            });
            
        }
    });
}