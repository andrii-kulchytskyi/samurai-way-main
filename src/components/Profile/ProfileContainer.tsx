import React from "react";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2";
        }
        this.props.getUserProfile(userId)
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
    getUserProfile: (userID: string) => void,
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePageReducer.profile,
    }
}


export default compose<React.ComponentType>(connect(mapStateToProps,
        {getUserProfile}),
    // withAuthRedirect,
    withRouter)(ProfileContainer)