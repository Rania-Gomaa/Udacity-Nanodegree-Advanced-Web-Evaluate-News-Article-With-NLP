// use seperate file for the listen function to solve the following error
// Jest has detected the following 1 open handle potentially keeping Jest from exiting

const { app } = require('./index')


// Detrmine the port where the server listens for requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})