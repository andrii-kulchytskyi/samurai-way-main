import React from 'react';
import styles from './Users.module.css'
import {UsersContainerPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/user.jpg";


class Users extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalUsersCount);
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        const onPageChanged = (page: number) => {
            this.props.setCurrentPage(page)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then((response) => {
                this.props.setUsers(response.data.items)

            })
        }

        return <div>
            <div>
                {pages.map((page, index) => {
                    return <span key={index}
                                 className={this.props.currentPage === page ? styles.selectedPage : ""}
                                 onClick={(event) => {
                                     onPageChanged(page)
                                 }}>{page}</span>
                })}

            </div>
            {
                this.props.users.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photos.small !== null ? user.photos.small
                        : userPhoto}
                         className={styles.photoSize}/>
                </div>
                <div>
                    {user.followed ? <button onClick={() => {
                        this.props.unFollow(user.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        this.props.follow(user.id)
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
    }
};
export default Users;