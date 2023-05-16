const express = require('express');

const app = express();

app.get('/' , (req , res)=>{
    res.send("Basic API setup")
})

app.listen(3002 , ()=>{
    console.log("Server is running at 3002")
})