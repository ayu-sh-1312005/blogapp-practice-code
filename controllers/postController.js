// jshint esversion:6
const Post=require("../models/postModel");

exports.postController=async(req,res) => {
    try{
        const {title,body}=req.body;
        const newPost=await Post.create({
            title,
            body
        });
        res.status(200).json({
            success: true,
            data: newPost,
            message: "posted successfully"
        });
    }catch(err){
        res.status(500).json({
            success: true,
            error: err.message,
            message: "error while posting data"
        });
    }
};

exports.getAllPosts=async(req,res)=>{
    try{
        const data=await Post.find({},{new:true}).populate("likes").populate("comments").exec();
        res.status(200).json({
            success: true,
            data: data,
            message: "successfully fetched all posts"
        });
    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message,
            message: "failed to fetch all posts"
        });
    }
};