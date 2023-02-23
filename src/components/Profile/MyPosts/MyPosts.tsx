import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Posts, {PostsType} from "./Posts/Posts";
import {ProfilePageType} from "../../../redux/state/store";
import {addPostAC, changeNewTextAC} from "../../../redux/state/profileReducer";


const MyPosts = (props: ProfilePageType) => {

    const addPost = () => {
        props.dispatch(addPostAC(props.newMessageTextPost))
        // props.addPostCallback(props.newMessageTextPost)
        // props.changeNewTextCallback("")
    }
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextAC(e.currentTarget.value))
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