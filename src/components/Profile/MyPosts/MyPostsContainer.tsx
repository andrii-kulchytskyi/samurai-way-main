import React from "react";
import {StateType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newMessageTextPost: state.profilePage.newMessageTextPost
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;