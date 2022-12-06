const dashboardContent =(req, res, next)=>{
    
    //fetched datenbank
    const datenbank ={
    username: "Peterson",
    uuid: 1234242525523524,
    dashboard: {
        emails: [{
            title: "email 1",
            body: "bodyText1"
        },
        {
            title: "email 2",
            body: "bodyText2"
        }]
    }
}
    const {username} = req.user;


    if(datenbank.username === username){
        req.dashboard = datenbank.dashboard
        next()
    }else{
        res.sendStatus(403)
    }
}

export default dashboardContent