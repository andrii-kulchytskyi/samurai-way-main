import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";
import {MyPostsContainerPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const MyPosts = (props: MyPostsContainerPropsType) => {
    const addNewPost = (values: AddNewPostProps) => {
        props.addPost(values.newPostText)
    }
    return (<div className={s.item}>
            <AddNewPostReduxForm onSubmit={addNewPost}/>
            <div></div>
            {props.posts.posts.map((el) => {
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
const maxLength10 = maxLengthCreator(10)
const AddNewPost = (props: InjectedFormProps<AddNewPostProps>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostText'} component={'Textarea'} validate={[required, maxLength10]} placeholder={"WHat is that"}>
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