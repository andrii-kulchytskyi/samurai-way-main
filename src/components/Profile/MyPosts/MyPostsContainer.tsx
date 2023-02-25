import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Posts, {PostsType} from "./Posts/Posts";
import {ProfilePageType} from "../../../redux/state/store";
import {addPostAC, changeNewTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props: any) => {

    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC(props.newMessageTextPost))
        // addPostAC(props.newMessageTextPost)
        // props.dispatch(addPostAC(props.newMessageTextPost))
        // props.addPostCallback(props.newMessageTextPost)
        // props.changeNewTextCallback("")
    }
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(changeNewTextAC(e.currentTarget.value))
        // props.dispatch(changeNewTextAC(e.currentTarget.value))
        // props.changeNewTextCallback(e.currentTarget.value)
    }

    return (<MyPosts newMessageTextPost={state.profilePage.newMessageTextPost} posts={state.posts} addPost={addPost}
                     changePost={onChangePostHandler}/>
    )
}
export default MyPostsContainer