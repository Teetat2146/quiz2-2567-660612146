import Image from "next/image";
import styles from "./page.module.css";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import Reply from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}

       <PostOwnner
        name="Teetat Yodbun"
        studentId="660612146"
        textPost="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
       />

        {/* Comment Example */}
        {comments.map((user) => (
          <Comment ImagePath={user.userImagePath} username={user.username} commentTitle={user.commentText} likes={user.likeNum} replies={}/>
        ))}

        {/* Reply Example */}
        <Reply/>

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}