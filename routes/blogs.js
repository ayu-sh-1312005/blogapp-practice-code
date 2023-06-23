const express=require("express");
const router=express.Router();

const {createLike,unlike}=require("../controllers/likeController");
const {postController,getAllPosts}=require("../controllers/postController");
const {commentController}=require("../controllers/commentController");

router.post("/likes/like",createLike);
router.post("/likes/unlike",unlike);
router.post("/createPost",postController);
router.post("/createComment",commentController);
router.get("/posts",getAllPosts);


module.exports=router;