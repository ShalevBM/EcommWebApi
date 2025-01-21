module.exports=(req,res,next)=>{
    let arrIps=["192.120.80","::1","4.5.6.7","1.2.3.4"];
    for (let i=0;i<arrIps.length;i++)
    {
        if(req.ip==arrIps[i])
        {
             return next()
        }
    }
    return res.status(401).json({Msg:`Not Authorized`});
};