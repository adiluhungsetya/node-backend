const http = require('http');
const express = require('express')
const appMiddleware = require('./src/middlewares/app-middlewares')
const appRoutes = require('./src/routes/index')
const logEvent = require('./event/myEmitters')
const loggingListener = require('./event/logging.listener')
const {ERROR}=require('./src/constant/event.constant')

loggingListener()
const app = express();

app.use(appMiddleware)
app.use(appRoutes)

const server = http.createServer(app);

server.on('error',function (e) {
    logEvent.emit(ERROR,{
        logTitle: 'APP_FAILED',
        logMessage: e
    })
})

module.exports = server