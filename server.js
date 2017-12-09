
const express = require("express");
const app = express();


let webshot = require('webshot');
let specificData;

app.get('/',(req,res)=>{
    res.send("let's get started");
});

app.get('/imageViewer',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/storeImageToLocalStorage',(req,res,next)=>{
    let renderStream = webshot('stackoverflow.com');
    renderStream.on('data', function(data) {
        specificData=data.toString('base64');
        next();
    });
},(req,res)=>{
    res.send(specificData);
});

app.listen(5676,()=>{
console.log("listening at http://localhost:5676");});