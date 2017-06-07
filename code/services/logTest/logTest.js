function logTest(req, resp){
    ClearBlade.init({request:req});
    log("hello world" + req.params.bloop);
    resp.success("bloop")
}