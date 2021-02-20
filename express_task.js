const express = require("express");              //i have requireexpress to use it //
const fs = require("fs");                   //i am going to work on file system so i require fs as well //
// const bodyparser=require("body-parser");        // i am going to take perticulary data so for that i am using body parser //
var app = express()                 //i have store express in one variable so no need to require again and again //

fs.readFile("data.json",function(err,data){    
    
    if (err) throw err;
        const users = JSON.parse(data);    //to come in javascript object we use parse because data is in string//
        // console.log(users)

    // app.use(bodyparser.urlencoded({extended:true}));

    app.get('/',function(req,res){
        details=users["Students_data"]
        for( i of details){
            console.log(i["name"]) 
            // res.send(del)
        }
    });
   
})  

app.listen(7000,function(req,res){
    console.log("server is running at the port number 5000")

    
})



  
    