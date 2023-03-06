import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Posts, {PostsType} from "./Posts/Posts";
import myPostsContainer, {MyPostsContainerPropsType} from "./MyPostsContainer";


const MyPosts = (props: MyPostsContainerPropsType) => {

    const addPost = () => {
        props.addPost()
    }
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)

    }

    return (<div className={s.item}>
            <textarea value={props.newPostText}
                      onChange={onChangePostHandler}></textarea>
            <button onClick={addPost}>Add post
            </button>
            <div></div>
            {props.posts.posts.map((el, index) => {
                return (
                    <Posts message={el.message} likeCount={el.likeCount} key={el.id}/>
                )
            })}
        </div>
    )
}
export default MyPosts