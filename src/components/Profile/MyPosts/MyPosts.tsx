import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Posts, {PostsType} from "./Posts/Posts";
import {PostType, ProfilePageType, state} from "../../../redux/state/state";


const MyPosts = (props: ProfilePageType) => {

    //
    const addPost = () => {
        props.addPostCallback(props.newMessageTextPost)
        props.changeNewTextCallback("")

    }
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value)

    }

    return (<div className={s.item}>
            <textarea value={props.newMessageTextPost}
                      onChange={onChangePostHandler}></textarea>
            <button onClick={addPost}>Add post
            </button>
            <div></div>
            {props.posts.map(el => {
                return (
                    <Posts message={el.message} likeCount={el.likeCount} key={el.id}/>
                )
            })}
        </div>
    )
}
export default MyPosts