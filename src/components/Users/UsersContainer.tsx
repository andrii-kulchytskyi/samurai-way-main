import {connect} from "react-redux";
import {
    follow, getUsers,
    InitialStateUserType,
    setCurrentPage, toggleIsFollowingProgress,
    unFollow,

} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";


class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader isFetching={this.props.isFetching}/> : null}
            {/*<Preloader isFetching={this.props.isFetching}/>*/}

            <Users currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </div>
    }
};

type MapStateToPropsType = {
    users: InitialStateUserType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

}
type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
    setCurrentPage: (currentPage: number) => void
    toggleIsFollowingProgress: (followingInProgress: boolean, userID: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPageReducer,
        pageSize: state.usersPageReducer.pageSize,
        totalUsersCount: state.usersPageReducer.totalUsersCount,
        currentPage: state.usersPageReducer.currentPage,
        isFetching: state.usersPageReducer.isFetching,
        followingInProgress: state.usersPageReducer.followingInProgress
    }
}


export default compose<React.ComponentType>(connect(mapStateToProps,
        {follow, unFollow, setCurrentPage, toggleIsFollowingProgress, getUsers}),
    // withAuthRedirect
)(UsersContainer)