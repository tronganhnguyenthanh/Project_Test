import React, { useEffect, useState } from "react"
import axios from "axios"
import { Button, Form } from "react-bootstrap"
import "../css/style.css"
import { useDispatch, useSelector } from "react-redux"
import { togglePost } from "../features/postSlice"
const PostList = () => {
  const [post, setPost] = useState([])
  const [comment, setComment] = useState([])
  const [keyWord, setKeyWord] = useState("")
  const toggle = useSelector(state => state.post.toggle)
  const dispatch = useDispatch()
  useEffect(() => {
    getPostList()
  }, [])
  const getPostList = async () => {
    let res = await axios.get("http://localhost:8080/api/posts")
    setComment(res?.data[0]?.comments)
    setPost(res?.data)
  }
  const handleSearchByKeyWord = () => {
    let filterKeyword = post?.filter((i) => i?.title?.includes(keyWord))
    setPost(filterKeyword)
  }

  const collapsePost = () => {
    dispatch(togglePost(!toggle))
  }
  return (
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
        return (
          <div className="d-flex justify-content-center">
            <div className="card w-75 mt-2" key={index}>
              <h2 className="text-primary text-center">{i?.title}</h2>
              <div className="body p-2">
                <h2 className="text-secondary">Author: {i?.author}</h2>
                <h2 className="text-secondary">Created at: {i?.createdAt}</h2>
                <p className="text-secondary">{i?.content}</p>
                <span className="text-secondary" onClick={collapsePost}>{comment?.length} replies</span>
                {toggle ?
                  <>
                    <hr/>
                    {comment?.map((i1, index1) => {
                       return (
                        <div key={index1} className="comment-wrapper">
                          <img className="img-avatar mr-3" src={i1?.avatar} alt=""/>
                          <div>
                           <div className="comment-content">
                             <h5 className="text-secondary">{i1?.authorComment}</h5>
                             <p className="text-secondary">{i1?.message}</p>
                           </div>
                          </div>
                        </div>
                      )
                     })
                    }
                  </>
                  :
                  ""
                }
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