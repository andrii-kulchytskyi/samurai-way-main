import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import axios from "axios";
import Profile from "./Profile";
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
import {setUserProfileAC} from "../../redux/profileReducer";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return <Profile profile={this.props.profile}/>;
    }
}

type MapStateToPropsType = {
    profile: number

}
type MapDispatchToPropsType = {
    setUserProfile: (profile: number) => void,
}

export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePageReducer.profile
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUserProfile: (profile: number) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)