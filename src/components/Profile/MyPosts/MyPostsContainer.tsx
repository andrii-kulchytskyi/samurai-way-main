import React, {ChangeEvent} from "react";
import {ProfilePageType, StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";



export type MyPostsContainerType = {
    store: StoreType
}
const MyPostsContainer = (props: MyPostsContainerType) => {

    return (<StoreContext.Consumer>{
            store => {
                let state = props.store.getState();
                const addPost = () => {
                    props.store.dispatch(addPostAC())

                }
                const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    props.store.dispatch(updateNewPostTextAC(e.currentTarget.value))

                }
            }
            return
            <MyPosts newMessageTextPost={state.getState().profilePage.newMessageTextPost}
            posts={store.getState().posts}
            addPost={addPost}
            changePost={onChangePostHandler}/>
        }

        </StoreContext.Consumer>
    )
}
export default MyPostsContainer