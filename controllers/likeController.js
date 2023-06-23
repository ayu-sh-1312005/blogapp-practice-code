// jshint esversion:6
const Like=require("../models/likeModel");
const Post=require("../models/postModel");

exports.createLike=async(req,res) =>{
    try{
        const {post,user}=req.body;
        const response=await Like.create({
            post,user
        });
        const updatePost=await Post.findByIdAndUpdate({_id:post},{$push: {likes:response._id}},{new:true}).populate("likes").exec();
        res.status(200).json({
            success: true,
            data: response,
            post: updatePost,
            message: "liked successfully"
        });
    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message,
            message: "error while posting data"
        });
    }
    
};

exports.unlike=async(req,res)=>{
    try{
        const {post,like}=req.body;
        const deleteLike=await Like.findOneAndDelete({post:post,_id:like});
        const response=await Post.findByIdAndUpdate({_id:post},{$pull:{likes:like}},{new:true}).populate("likes").populate("comments").exec();
        res.status(200).json({
            success: true,
            data: response,
            deletedLike: deleteLike,
            message: "unliked successfully"
        });
    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message,
            message: "failed to unlike post"
        });
    }
};

