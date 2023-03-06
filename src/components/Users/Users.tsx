import React from 'react';
import styles from './Users.module.css'
import {UserType, InitialStateUserType} from "../../redux/usersReducer";
import {UsersContainerPropsType} from "./UsersContainer";
import s from "../Profile/Profile.module.css";
import {ProfileInfo} from "../Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "../Profile/MyPosts/MyPostsContainer";


const Users = (props: UsersContainerPropsType) => {
    if (props.users.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://s3.amazonaws.com/shecodesio-production/candidates/avatars/000/024/058/medium/AEBA52B5-3261-4D0D-896B-EEF5CE8079C1.jpeg?1652433732",
                followed: false,
                fullName: "Yuliia Sulima",
                status: "Ya bulka bulka bulka",
                location: {city: "Dubai", country: "United Arab Emirates"}
            },
            {
                id: 2,
                photoUrl: "https://s3.amazonaws.com/shecodesio-production/candidates/avatars/000/024/058/medium/AEBA52B5-3261-4D0D-896B-EEF5CE8079C1.jpeg?1652433732",
                followed: true,
                fullName: "Rashid Al bin",
                status: "Ya sheikh",
                location: {city: "Kharkiv", country: "Ukraine"}
            },
            {
                id: 3,
                photoUrl: "https://s3.amazonaws.com/shecodesio-production/candidates/avatars/000/024/058/medium/AEBA52B5-3261-4D0D-896B-EEF5CE8079C1.jpeg?1652433732",
                followed: false,
                fullName: "Dimych",
                status: "Ya boss",
                location: {city: "Minsk", country: "Belarus"}
            },
        ])
    }
    return <div>
        {
            props.users.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photoUrl} className={styles.photoSize}/>
                </div>
                <div>
                    {user.followed ? <button onClick={() => {
                        props.unFollow(user.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        props.follow(user.id)
                    }}>Follow</button>}
                </div>
            </span>
                <span>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
            </span>
                <span>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>
            </span>
            </div>)
        }
    </div>

};


export default Users;