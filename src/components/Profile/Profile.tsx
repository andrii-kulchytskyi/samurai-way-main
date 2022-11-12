import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img src = "https://www.ikea.com/images/a-small-living-room-area-with-lots-of-light-a-sofa-a-tv-a-ve-976b1c05c23de825421229a2abec9203.jpg"/>
            </div>
            <div>ava+description</div>
            <MyPosts/>
        </div>
    )
}
export default Profile