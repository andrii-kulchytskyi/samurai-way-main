import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Posts, {PostsType} from "./Posts/Posts";

type MyPostsProps = {
    posts: PostsType[],
    newMessageTextPost: string,
    addPost: () => void,
    updateNewPostText: (text: string) => void
}

const MyPosts = (props: MyPostsProps) => {

    const addPost = () => {
        props.addPost()
    }
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)

    }

    return (<div className={s.item}>
            <textarea value={props.newMessageTextPost}
                      onChange={onChangePostHandler}></textarea>
            <button onClick={addPost}>Add post
            </button>
            <div></div>
            {props.posts.map((el,index) => {
                return (
                    <Posts message={el.message} likeCount={el.likeCount} key={index}/>
                )
            })}
        </div>
    )
}
export default MyPosts