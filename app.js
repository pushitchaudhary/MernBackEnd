const express = require('express');
const { ConnectDatabase } = require('./database/database');
ConnectDatabase()

const app = express();


// API
app.get('/',(req,res)=>{
    res.json({
        status : 200,
        message : 'this is home page !!'
    })
})



// Port Listen
app.listen(4000,()=>{
    console.log('Node Has Started At 4000')
})