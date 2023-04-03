import {connect} from "react-redux";
import {
    follow, followTC, getUsersTC,
    InitialStateUserType,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingProgress,
    unFollow, unFollowTC,
    UserType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {AnyAction, compose, Dispatch} from "redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {usersAPI} from "../../api/api";
import {ActionsType} from "../../redux/store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setTotalUsersCount(data.totalUsersCount);
        //     this.props.setUsers(data.items);
        // });
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        // this.props.setCurrentPage(pageNumber)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        // })
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <div>
            <Preloader isFetching={this.props.isFetching}/>
            <Users currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}
                // toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
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
    follow: (userID: number) => (dispatch: Dispatch) => void,
    unFollow: (userID: number) => (dispatch: Dispatch) => void,
    // setUsers: (users: UserType[]) => void,
    setCurrentPage: (currentPage: number) => void
    // setTotalUsersCount: (totalUsersCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    // toggleIsFollowingProgress: (followingInProgress: boolean, userID: number) => void
    getUsers: (currentPage: number, pageSize: number) => (dispatch: Dispatch) => void
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
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => (dispatch: Dispatch) => {
            dispatch(follow(userID))
        },
        unFollow: (userID: number) => (dispatch: Dispatch) => {
            dispatch(unFollow(userID))
        },
        // setUsers: (users: UserType[]) => {
        //     dispatch(setUsers(users))
        // },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage))
        },
        // setTotalUsersCount: (totalUsersCount: number) => {
        //     dispatch(setTotalUsersCount(totalUsersCount))
        // },
        // toggleIsFetching: (isFetching: boolean) => {
        //     dispatch(toggleIsFetching(isFetching))
        // },
        // toggleIsFollowingProgress: (isFetching: boolean, userID: number) => {
        //     dispatch(toggleIsFollowingProgress(isFetching, userID))
        // },
        getUsers: (currentPage: number, pageSize: number) => (dispatch: Dispatch<ActionsType>) => {
            getUsersTC(currentPage, pageSize)
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps,
    mapDispatchToProps),
    // withAuthRedirect
)(UsersContainer)