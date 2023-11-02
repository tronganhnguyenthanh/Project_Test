import axios from "axios"
import React, {useEffect, useState} from "react"
const CommentList = () => {
  const [commentList, setCommentList] = useState([])
  useEffect(() => {
   getCommentList()
  },[])
  const getCommentList = async () => {
   let res = await axios.get("http://localhost:8080/api/comments/reply/list")
   setCommentList(res?.data)
  }
  return(
   <div>
     <h3 className="text-secondary">{commentList?.length} replies</h3>
     {commentList?.map((i, index) => {
       return(
        <div key={index}>
          <p className="text-secondary">{i?.comment}</p>
        </div>
       )
      })
     }
   </div>
  )
}

export default CommentList