var express= require("express");
var app=express();

app.get("/", function(req,res){
    res.send("Hello");
    var postmark = require("postmark");
    var client = new postmark.Client("69bcb02a-c97c-4017-85d9-6607d47874a3");
    client.sendEmail({
        "From": "volunteer@juvenilecare.org",
        "To": "volunteer@juvenilecare.org",
        "Subject": "Test", 
        "TextBody": "Hello from Postmark!"
    },function(err,info){
    console.log(err);
    console.log(info);
    });
});


app.listen(process.env.PORT, process.env.IP, function(err, pass){
    if(err){
        console.log(err);
    }else{
        console.log("Server Started");
    }
});