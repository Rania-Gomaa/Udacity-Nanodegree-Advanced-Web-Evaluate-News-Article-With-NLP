//secure API key
const dotenv = require('dotenv');
dotenv.config();
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?"
//console.log(`Your API key is ${process.env.API_KEY}`);
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require("node-fetch");

const app = express()

app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'))



app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
    //res.sendFile(path.resolve('src/client/views/index.html'))
})



app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post("/userURL", async (req, res) => {
    //console.log(req.body.inputURL)
    const response = await fetch(`${baseURL}key=${process.env.API_KEY}&lang=auto&url=${req.body.inputURL}`);  
    
try {
    const data = await response.json();
    res.send(data);
    } catch(error) {
        console.log("error", error);
    }
    
})


module.exports = {
    app
  }
