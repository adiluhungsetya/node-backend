const logEvent = require('../../event/myEmitters')
const {ERROR}=require('../constant/event.constant')
const noRoute = (req,res)=>{
    logEvent.emit(ERROR,{
        logTitle:'ROUTE_FAILED',
        logMessage: `${req.originalUrl}`
    })
    res.status(404);
    res.json({message:'Page Not Found.'});
};

module.exports = noRoute;