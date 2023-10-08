import "./post.css";
import { MoreVert } from "@mui/icons-material";

export default function Postt() {

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img  className="postProfileImg" src="/assets/person/2.jpg" alt=""/>   
            <span className="postUsername">Mithila Palkar </span>
            <span className="postDate">5 min ago</span>
            </div>
            <div className="postTopRight">  
            </div>
              <MoreVert/> 
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey!! Its my first post.. </span>
          <img className="postImg" src="assets/person/2.jpg" alt=""/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter"> 32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9comments</span>
          </div>
        </div> 
      </div>
  );
}
  
