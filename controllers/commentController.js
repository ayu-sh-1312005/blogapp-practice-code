// jshint esversion:6
const Comment=require("../models/commentModel");
const Post=require("../models/postModel");

exports.commentController=async(req,res) => {
    try{
        const {post,user,body}=req.body;
        const response=new Comment({
            post,user,body
        });
        const saveComment=await response.save();
        const updatePost=await Post.findByIdAndUpdate({_id:post},{$push: {comments: saveComment._id}},{new: true}).populate("comments").exec();
        res.status(200).json({
            success: true,
            data: saveComment,
            comments: updatePost, 
            message: "commented successfully"
        });
    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message,
            message: "error while posting data"
        });
    }
};
