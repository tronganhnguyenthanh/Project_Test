const commentModel = require("../model/comment.model")
// Post comment
const postComment = async (req, res) => {
  try{
    let comments = new commentModel({
     comment:req.body.comment,
    })
    await comments.save()
    res.json(comments)
  }catch(error){
    res.status(400).json({message:error})  
  } 
}

// Get and count post comments
const getCommentList = async (req, res) => {
  try{
   let commentList = await commentModel.find()
   res.json(commentList)
  }catch(error){
   res.status(400).json({message:error})
  }
}

module.exports = {
 postComment,
 getCommentList
}