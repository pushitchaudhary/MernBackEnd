const express = require('express');
const { ConnectDatabase } = require('./database/database');
const Blog = require('./model/blogModel');
ConnectDatabase()

const app = express();

// Node js lai form baat aako data lai parse garne navaye (undefined) show garxha
app.use(express.json());
app.use(express.urlencoded({extended:true}))


// CREATE BLOG API
app.post('/createBlog', async (req,res)=>{

    const Title = req.body.Title
    const SubTitle = req.body.SubTitle
    const Description = req.body.Description

    // Alternative  (Object destructuring)
    // const {Title, SubTitle, Description} = req.body;

    // insert database logic
    await Blog.create({
        Title : Title,
        SubTitle : SubTitle,
        Description : Description
    })

    res.status(200).json({
        message : "Blog Created Successfully !!"
    })
})

// SHOW ALL BLOGS API
app.get('/Blogs', async(req,res)=>{

    // fetching data from database 
    const blog = await Blog.find();
    // console.log(blog.length)
    // console.log(blog[0])
    // console.log(blog[0].Title)

    if(blog.length > 0){
        data = blog
    }else{
        data = 'there is no blog !!'
    }

    res.status(200).json({
        status : 200,
        message : data
    })
})

// UPDATE BLOG API
app.patch('/Blogs/:id', async (req,res)=>{
    const blogID = req.params.id

    const {Title, SubTitle, Description} = req.body

    const IsBlogFound = await Blog.findById(blogID)

    if(IsBlogFound){
        await Blog.findByIdAndUpdate(blogID,{
            Title : Title,
            SubTitle : SubTitle,
            Description : Description
        })

        res.status(200).json({
            message : "Upadated Successfully"
        })

    }else{
        res.status(404).json({
            message : "Blog Not Found"
        })
    }
})

// SHOW SINGLE BLOG API
app.get('/Blogs/:id',async (req,res)=>{
    const BlogId = req.params.id;

    //Find Blog By ID
    const Blogs = await Blog.findById(BlogId)

    var Blogss;
    if(Blogs){
        Blogss = Blogs
    }else{
        Blogss = 'No data'
    }

    res.status(200).json({
        message : Blogss
    })

})

// DELETE BLOG API
app.delete('/Blogs/:id', async(req,res)=>{
    const id = req.params.id

    const isBlogFound = await Blog.findById(id)

    if(isBlogFound){
        await Blog.findByIdAndDelete(id);
        res.status(200).json({
            message : 'Blog Deleted !!' 
        })
    }else{
        res.status(200).json({
            message : 'NO BLOG !!' 
        })
    } 
})


// Port Listen
app.listen(4000,()=>{
    console.log('Node Has Started At 4000')
})