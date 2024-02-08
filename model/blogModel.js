const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    Title : {
        type : String,
        required : true
    },
    SubTitle : {
        type : String
    },
    Description : {
        type : String
    }
},{
    timestamps : true
})

const Blog = mongoose.model('Blog',blogSchema)
module.exports = Blog

// Alternative 
// module.exports = mongoose.model('Blog', blogSchema);