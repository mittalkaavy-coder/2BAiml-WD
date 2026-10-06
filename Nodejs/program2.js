const fs = require('fs')
fs.writeFile("std.txt","Name: Kaavy",(err)=>{
    if(err){
        console.log(err)
    } else{
        console.log("File Created")
    }
})

fs.appendFile(
    "std.txt",
    "\nAge: 28",
    (err,data)=>{
        if(err){
            console.log(err)
        } else{
            console.log('fileupdated'+this.data)
        }
    }
)

fs.readFile('std.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    } else{
        console.log(data)
    }
})