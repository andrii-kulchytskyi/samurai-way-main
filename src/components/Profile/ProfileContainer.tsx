import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {ProfilePageType, setUserProfileAC} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2";
        }
        usersAPI.getProfileUser(userId).then((data) => {
            this.props.setUserProfile(data);
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: number

}
type MapDispatchToPropsType = {
    setUserProfile: (profile: number) => void,
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
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
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)