const mongoose = require('mongoose');

exports.ConnectDatabase = async ()=>{
    
    // connecting to datbase
    await mongoose.connect('mongodb+srv://hello:hello@cluster0.taepsyj.mongodb.net/?retryWrites=true&w=majority')
    console.log('Database Connected Successfully')
}

