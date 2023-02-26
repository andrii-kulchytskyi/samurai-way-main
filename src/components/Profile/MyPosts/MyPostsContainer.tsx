import React, {ChangeEvent} from "react";
import {ProfilePageType, StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";


export type MyPostsContainerType = {
    store: StoreType
}
const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();
                const addPost = () => {
                    store.dispatch(addPostAC());
                };
                const onChangePostHandler = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text));
                };

                return (
                    <MyPosts
                        posts={state.profilePage.posts}
                        newMessageTextPost={state.profilePage.newMessageTextPost}
                        addPost={addPost}
                        updateNewPostText={onChangePostHandler}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer