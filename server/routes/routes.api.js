const express = require("express")
const postController = require("../controller/posts.controller")
const commentController = require("../controller/comments.controller")
const router_api = express.Router()
// api get post list
router_api.get("/posts", postController.getPostList)
// api post comment
router_api.post("/comments/reply", commentController.postComment)
// api comment list
router_api.get("/comments/reply/list", commentController.getCommentList)
module.exports = router_api