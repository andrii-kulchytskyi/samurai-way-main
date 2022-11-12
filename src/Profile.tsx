import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img src = "https://www.ikea.com/images/a-small-living-room-area-with-lots-of-light-a-sofa-a-tv-a-ve-976b1c05c23de825421229a2abec9203.jpg"/>
            </div>
            <div>ava+description</div>
            <div>my posts</div>
            <div>anew post</div>
            <div className ={s.item}>post1</div>
            <div className ={s.item}>post2</div>
        </div>
    )
}
export default Profile