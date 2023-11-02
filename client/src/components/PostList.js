import React, {useEffect, useState} from "react"
import axios from "axios"
import {Button, Form} from "react-bootstrap"
// import CommentList from "./CommentList"
import "../css/style.css"
const PostList = () => {
  const [post, setPost] = useState([])
  const [keyWord, setKeyWord] = useState("")
  useEffect(() => {
   getPostList()
  },[])
  const getPostList = async () => {
   let res = await axios.get("http://localhost:8080/api/posts")
   setPost(res?.data)
  }
  const handleSearchByKeyWord = () => {
    let filterKeyword = post?.filter((i) => i?.title?.includes(keyWord))
    setPost(filterKeyword)
  }
  return(
   <>
    <div className="d-flex justify-content-center mt-2">
     <Form.Control
       className="form-control w-50"
       value={keyWord}
       onChange={(e) => setKeyWord(e.target.value)}
     />
     <Button onClick={handleSearchByKeyWord}>Search</Button>
    </div>
    {post?.map((i, index) => {
      return(
       <div className="d-flex justify-content-center">
         <div className="card w-75 mt-2" key={index}>
           <h2 className="text-primary text-center">{i?.title}</h2>
           <div className="body p-2">
             <h2 className="text-secondary">Author: {i?.author}</h2>
             <h2 className="text-secondary">Created at: {i?.createdAt}</h2>
             <p className="text-secondary">{i?.content}</p>
             {/* <CommentList/> */}
           </div>
         </div>
       </div>
      )
     })
    }
   </>
  )
}

export default PostList