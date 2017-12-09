
const express = require("express");
const app = express();


let webshot = require('webshot');

let specificData;

//home Page
app.get('/',(req,res)=>{
    res.send("let's get started");
});

//page for viewing Image
app.get('/imageViewer',(req,res)=>{
    res.sendFile('/home/soumya/WebstormProjects/webshot/index.html');
});

//sending image for trial usage
app.use('/use',express.static('/home/soumya/WebstormProjects/webshot/google.com.png'));

//used for storing to local storage
app.get('/storeImageToLocalStorage',(req,res,next)=>{
    let renderStream = webshot('google.com');
    renderStream.on('data', function(data) {
        specificData=data.toString('base64');
        next();
    });
},(req,res)=>{
    res.send(specificData);
});

app.listen(5676,()=>{
console.log("listening at http://localhost:5676");});