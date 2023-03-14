import {connect} from "react-redux";
import {
    followAC,
    InitialStateUserType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setTotalUsersCount(response.data.totalUsersCount);
            this.props.setUsers(response.data.items);
        })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      users={this.props.users}
                      totalUsersCount={this.props.totalUsersCount}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      onPageChanged={this.onPageChanged}/>
    }
};

type MapStateToPropsType = {
    users: InitialStateUserType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPageReducer,
        pageSize: state.usersPageReducer.pageSize,
        totalUsersCount: state.usersPageReducer.totalUsersCount,
        currentPage: state.usersPageReducer.currentPage,

    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)