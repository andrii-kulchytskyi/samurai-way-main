import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Posts, {PostsType} from "./Posts/Posts";
import {addPostAC, changeNewTextAC, ProfilePageType} from "../../../redux/state/state";


const MyPosts = (props: ProfilePageType) => {


    const addPost = () => {
        props.dispatch({type: "ADD-POST", postMessage: props.newMessageTextPost})
        props.dispatch({type: "CHANGE-NEW-TEXT", newText: ""})
        // props.addPostCallback(props.newMessageTextPost)
        // props.changeNewTextCallback("")

    }
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "CHANGE-NEW-TEXT", newText: e.currentTarget.value})
        // props.changeNewTextCallback(e.currentTarget.value)
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