import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({post}) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="post__Wrapper">
        <div className="post__Top">
          <div className="post__Top-Left">
            <img
              className="post__Profile-Img"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="post__Username">
            {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="post__Date">{post.date}</span>
          </div>
          <div className="post__Top-Right">
            <MoreVert />
          </div>
        </div>
        <div className="post__Center">
          <span className="post__Text">{post?.desc}</span>
          <img className="post__Img" src={post.photo} alt="" />
        </div>
        <div className="post__Bottom">
          <div className="post__Bottom-Left">
            <img className="like__Icon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="like__Icon" src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className="post__Like-Counter"> {like} people like it</span>
          </div>
          <div className="post__Bottom-Right">
            <span className="post__Comment-Text"> {post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
