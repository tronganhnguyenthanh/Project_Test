const mongoose = require("mongoose")
const commentSchema = new mongoose.Schema({
  comment:{
   type:String,
  },
  createdAt:{
   type:Date
  }
},{
 collection:"comments"
})
module.exports = mongoose.model("commentSchema", commentSchema)