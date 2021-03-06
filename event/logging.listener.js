const recordLog = require('./logger')
const logEvent = require('./myEmitters')
const {TYPE_ERROR,TYPE_FATAL,TYPE_INFO}=require('../src/constant/logType.constant')
const {ERROR,FATAL,INFO}=require('../src/constant/event.constant')

const loggingListener=()=>{
    logEvent.on(ERROR, function (ev) {
        recordLog({logType : TYPE_ERROR, logTitle: ev.logTitle, logMessage: ev.logMessage})
    })
    logEvent.on(FATAL, function (ev) {
        recordLog({logType : TYPE_FATAL, logTitle: ev.logTitle, logMessage: ev.logMessage})
        process.exit(1)
    })
    logEvent.on(INFO, function (ev) {
        recordLog({logType : TYPE_INFO, logTitle: ev.logTitle, logMessage: ev.logMessage})
    })
}

module.exports = loggingListener