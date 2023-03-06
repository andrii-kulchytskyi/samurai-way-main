import {connect} from "react-redux";
import Users from "./Users";
import {followAC, InitialStateUserType, setUsersAC, unFollowAC, UserType} from "../../redux/usersReducer";
import reduxStore, {AppStateType} from "../../redux/redux-store";
import {ActionsType} from "../../redux/store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users: InitialStateUserType
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
    setUsers: (users: UserType[]) => void,
}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPageReducer
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
        }

    }

}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)