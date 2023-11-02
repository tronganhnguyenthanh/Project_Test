const getPostList = async (req, res) => {
  try{
   let posts = [
     { 
        id:1,
        title:"First post title",
        author:"Trong Anh",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        createdAt:"02/11/2023"
     },
     {
        id:2,
        title:"Second post title",
        author:"John Smith",
        content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        createdAt:"03/11/2023"
     },
     {
        id:3,
        title:"Third post title",
        author:"Jenny Pham",
        content:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        createdAt:"04/11/2023"
     },
     {
        id:4,
        title:"Fourth post title",
        author:"Lily Huynh",
        content:"Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        createdAt:"05/11/2023"
     },
     {
        id:5,
        title:"Fifth post title",
        author:"Johnny Tran",
        content:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        createdAt:"06/11/2023"
     }
    ]
    res.json(posts)
  }catch(error){
    res.status(400).json({message:error})
 }
}

module.exports = {
 getPostList
}