import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state/store";


const Profile = (props: ProfilePageType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newMessageTextPost={props.newMessageTextPost}
                     dispatch={props.dispatch}
                // addPostCallback={props.addPostCallback}
                // changeNewTextCallback={props.changeNewTextCallback}
            />
        </div>
    )
}
export default Profile