import React from "react";
import {UsersContainerPropsType} from "./UsersContainer";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {InitialStateUserType} from "../../redux/usersReducer";

type UsersPropsType = {
    currentPage: number
    pageSize: number
    users: InitialStateUserType
    totalUsersCount: number
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
    onPageChanged: (page: number) => void
}

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <>
            {pages.map((page) => {
                return <span
                             className={props.currentPage === page ? styles.selectedPage : ""}
                             onClick={(event) => {
                                 props.onPageChanged(page)
                             }}>{page}</span>
            })}
        </>
        {
            props.users.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photos.small !== null ? user.photos.small
                        : userPhoto}
                         className={styles.photoSize}/>
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
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
                <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
            </span>
            </div>)
        }
    </div>
};
export default Users;