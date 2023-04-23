import React from 'react';
import Preloader from "../../common/Preloader";
import ProfileStatus from "../ProfileStatus";


type ProfileInfoType = {
    profile: number
    status: string
    updateStatus: (status: string) => void
}
export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader isFetching={true}/>
    }
    return (
        <div>
            <img src={props.profile.toString()}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div>ava+description</div>
        </div>
    );
};

