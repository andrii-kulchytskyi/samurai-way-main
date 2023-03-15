import {connect} from "react-redux";
import {
    followAC,
    InitialStateUserType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unFollowAC,
    UserType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import Users from "./Users";
import preloader from '../../assets/images/preloader.gif'

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalUsersCount);
        })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            <div> {this.props.isFetching ? <img src={preloader}/> : null}</div>
            <Users currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}

            />
        </>
    }
};

type MapStateToPropsType = {
    users: InitialStateUserType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

}
type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPageReducer,
        pageSize: state.usersPageReducer.pageSize,
        totalUsersCount: state.usersPageReducer.totalUsersCount,
        currentPage: state.usersPageReducer.currentPage,
        isFetching: state.usersPageReducer.isFetching

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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)