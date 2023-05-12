import React from "react";
import {StateType} from "../../../redux/store";
import {addPostAC, InitialStateProfileType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    posts: InitialStateProfileType,
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: (newPost: string) => void,
    // updateNewPostText: (text: string) => void
}

export type MyPostsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePageReducer,
        newPostText: state.profilePageReducer.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostAC(newPost));
        },
        // updateNewPostText: (text: string) => {
        //     dispatch(updateNewPostTextAC(text))
        // }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;