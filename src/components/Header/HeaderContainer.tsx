import React from "react";
import {NavLink, RouteComponentProps} from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {setAuthUsersDataAC} from "../../redux/authReducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        usersAPI.getHeaderUser().then((response) => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUsersData(response.data.id, response.data.email, response.data.login)
            }
        });
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType = {
    id: string
    email: string
    login: string
    isAuth: boolean

}
type MapDispatchToPropsType = {
    setAuthUsersData: (userId: any, email: any, login: any) => void,
}
export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        id: state.authReducer.userId,
        email: state.authReducer.email,
        login: state.authReducer.login,
        isAuth: state.authReducer.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setAuthUsersData: (id: string, email: string, login: string) => {
            dispatch(setAuthUsersDataAC(id, email, login))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)