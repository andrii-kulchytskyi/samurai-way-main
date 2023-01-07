import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hello hor u', likeCount: 2},
        {id: 2, message: 'It is my first post,', likeCount: 2},

    ]

    return (<div className={s.item}>
            <textarea></textarea>
            <button>new post</button>
            <div></div>
            {postData.map(el => {
                return (
                    <Posts message={el.message} likeCount={el.likeCount}/>
                )
            })}


        </div>
    )
}
export default MyPosts