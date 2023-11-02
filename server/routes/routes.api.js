const express = require("express")
const postController = require("../controller/posts.controller")
const router_api = express.Router()
router_api.get("/posts", postController.getPostList)
module.exports = router_api