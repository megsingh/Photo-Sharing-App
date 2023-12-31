const express = require('express');
const bodyParser = require('body-parser')
const Post = require('../model/post');
const router = express.Router()

router.use(bodyParser());
// ============================ FETCH POSTS =====================================
router.get("/posts", async (req, res) => {
    const posts = await Post.find();
    res.status(200).json({
        status: "success",
        posts
    })
})

// ============================ FETCH POST WITH ID =====================================
router.get("/posts/:id", async (req, res) => {
    try {
        const post = await Post.findOne({_id: req.params.id, user: req.user})
        return res.status(200).json({
            status: "Success",
            post
        })
        

    } catch (e) {
        return res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})
// ============================ CREATE POSTS =====================================
router.post("/posts", async (req, res) => {
    try {
        const post = await Post.create({
            name: req.body.name,
            location : req.body.location,
            likes: req.body.likes,
            description: req.body.description,
            date: req.body.date,
            PostImage: req.body.PostImage,
            user: req.user
        })
        return res.status(200).json({
            status: "Post created",
            data: post
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})

// ============================ EDIT POSTS =====================================
router.put("/posts/:postId", async (req, res) => {
    try {
        
            const post = await Post.updateOne({ _id: req.params.postId }, req.body)
            return res.status(200).json({
                status: "Success",
            })
        

    } catch (e) {
        return res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})

// ============================ DELETE POSTS =====================================
router.delete("/posts/:postId", async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        // console.log(post.user);
        // console.log(req.user);
        console.log(post.user!=req.user);
        if (post.user != req.user) {
            console.log("unauthorised");
            return res.status(401).json({
                status: "failed",
                message: "you are not authorized to delete this post"
            }) // common function
        } else {
            console.log("deleting post");
            const deletedPost = await Post.deleteOne({ _id: req.params.postId })
            return res.status(200).json({
                status: "Successfully deleted",
            })
        }

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})

module.exports = router