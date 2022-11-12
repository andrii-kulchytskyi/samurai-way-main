import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPosts = () => {
    return (<div className={s.item}>
            <textarea></textarea>
            <button>new post</button>
            <div></div>
            <Posts message={"Heyyy!"}/>
            <Posts message={"Byeeee!"}/>

        </div>
    )
}
export default MyPosts