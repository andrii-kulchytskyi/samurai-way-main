import React from "react";
import s from "./MyPosts.module.css";
import Posts, {PostsType} from "./Posts/Posts";
import {PostType, ProfilePageType} from "../../../state/state";


const MyPosts = (props: ProfilePageType) => {

    let textRef = React.createRef<any>()

    const addPost = () => {
        let text = textRef.current.value
        alert(text)
    }
    return (<div className={s.item}>
            <textarea>{textRef}</textarea>
            <button onClick={addPost}>Add post
            </button>
            <div></div>
            {props.posts.map(el => {
                return (
                    <Posts message={el.message} likeCount={el.likeCount}/>
                )
            })}
        </div>
    )
}
export default MyPosts