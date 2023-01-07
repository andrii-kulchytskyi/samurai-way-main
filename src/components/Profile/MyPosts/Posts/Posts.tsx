import React from "react";
import s from "./Posts.module.css";


export type PostsType = {
    message: string,
    likeCount: number
}
const Posts = (props: PostsType) => {
    return (<div className={s.item}>
            <img
                src="https://cdn3.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png"/>
            {props.message}
            <div></div>
            <span>like</span>
        </div>
    )
}
export default Posts