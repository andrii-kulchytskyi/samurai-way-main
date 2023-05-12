import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Posts, {PostsType} from "./Posts/Posts";
import myPostsContainer, {MyPostsContainerPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const MyPosts = (props: MyPostsContainerPropsType) => {


    const addNewPost = (values: AddNewPostProps) => {
        props.addPost(values.newPostText)
    }
    return (<div className={s.item}>
            {/*<textarea value={props.newPostText}*/}
            {/*          onChange={onChangePostHandler}></textarea>*/}
            {/*<button onClick={addPost}>Add post*/}
            {/*</button>*/}
            <AddNewPostReduxForm onSubmit={addNewPost}/>
            <div></div>
            {props.posts.posts.map((el, index) => {
                return (
                    <Posts message={el.message} likeCount={el.likeCount} key={el.id}/>
                )
            })}
        </div>
    )
}

type AddNewPostProps = {
    newPostText: string
}
const AddNewPost = (props: InjectedFormProps<AddNewPostProps>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostText'} component={'textarea'}>
            </Field>
            <button>Add post
            </button>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm<AddNewPostProps>({
    form: 'profileAddNewPostForm'
})(AddNewPost)

export default MyPosts