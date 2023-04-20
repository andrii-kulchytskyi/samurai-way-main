import React from "react";
import {UsersContainerPropsType} from "./UsersContainer";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {InitialStateUserType, unFollow} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    currentPage: number
    pageSize: number
    users: InitialStateUserType
    totalUsersCount: number
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    onPageChanged: (page: number) => void
    toggleIsFollowingProgress: (followingInProgress: boolean, userID: number) => void
    followingInProgress: number[]
}

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }
    return <div>
        <>
            {pages.map((page, index) => {
                return <span key={index}
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
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small
                            : userPhoto}
                             className={styles.photoSize}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    props.unFollow(user.id)
                                }}>Unfollow</button>
                        :
                        <button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => {
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