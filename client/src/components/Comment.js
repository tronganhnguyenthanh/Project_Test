import React, {useState} from "react"
import {Button, Form} from "react-bootstrap"
import "../css/style.css"
import axios from "axios"
const Comment = () => {
  const [comment, setComment] = useState("")
  const sendComment = async () => {
    let comments = {
     comment:comment
    }
    let res = await axios.post("http://localhost:8080/api/comments/reply", comments)
    setComment(res?.data)
  }
  return(
   <div className="p-2">
    <Form.Label>Message</Form.Label>
    <Form.Control 
      className="form-control"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    />
    <Button className="mt-1" onClick={sendComment}>Comment</Button>
   </div>
  )
}

export default Comment