import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state/state";


const Profile = (props: ProfilePageType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPostCallback={props.addPostCallback} newMessageTextPost={props.newMessageTextPost} changeNewTextCallback={props.changeNewTextCallback}/>
        </div>
    )
}
export default Profile